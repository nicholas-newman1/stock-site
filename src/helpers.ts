/* Takes in a string and a number. Truncates the string to have a length no
longer than the number provided. It will also remove partial words from the
end of the string. */
export function truncate(str: string, n: number) {
  // return str unaltered if either paramater is of the wrong type
  if (typeof str !== 'string' || typeof n !== 'number') {
    return str;
  }

  // return string unaltered if its length is already < n
  if (str.length <= n) {
    return str;
  }

  // cut string to length of n and return it w/o partial words at the end
  const subString = str.substr(0, n);
  return subString.substr(0, subString.lastIndexOf(' '));
}

// converts milliseconds since epoch to a string indicating how long ago
export const getTimeAgoString = (timestamp: number) => {
  if (typeof timestamp !== 'number') return timestamp;

  // constants
  const MINUTE = 1000 * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const YEAR = DAY * 365;

  // timeAgo === milliseconds since given date
  const timeAgo = Date.now() - timestamp;

  // return timeAgo string
  if (timeAgo < MINUTE) return `less than a minute ago`;
  if (timeAgo < HOUR) return `${Math.floor(timeAgo / MINUTE)} minutes ago`;
  if (timeAgo < DAY) return `${Math.floor(timeAgo / HOUR)} hours ago`;
  if (timeAgo < DAY * 2) return `A day ago`;
  if (timeAgo < YEAR) return `${Math.floor(timeAgo / DAY)} days ago`;
  if (timeAgo < YEAR * 2) return `A year ago`;
  return `${Math.floor(timeAgo / YEAR)} years ago`;
};

// convert milliseconds since epoch to AM/PM time
export const formatAMPM = (timestamp: number) => {
  if (typeof timestamp !== 'number') return timestamp;

  return new Date(timestamp).toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const formatPhoneNumber = (phoneNumberString: string) => {
  // Make phone numbers more readable
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return phoneNumberString;
};

export const sortData = (
  data: any[],
  property: string,
  reverseOrder = false
) => {
  const sortedData = [...data];
  const compare = (a: any, b: any) => {
    let comparison = 0;
    if (a[property] < b[property]) comparison = -1;
    if (a[property] > b[property]) comparison = 1;
    return reverseOrder ? comparison * -1 : comparison;
  };
  sortedData.sort(compare);
  return sortedData;
};

export const shortenNumber = (number: number, decimals = 2) => {
  /* Return a number in localeString format (ex. commas added). Large numbers are
  shortened and a letter is added (Ex. M = Million). Decimals are rounded */

  if (typeof number !== 'number') return number;

  if (number >= 1000000000000 || number <= -1000000000000) {
    return `${round(number / 1000000000000, decimals)}T`;
  } else if (number >= 1000000000 || number <= -1000000000) {
    return `${round(number / 1000000000, decimals)}B`;
  } else if (number >= 1000000 || number <= -1000000) {
    return `${round(number / 1000000, decimals)}M`;
  } else {
    return round(number, decimals, true);
  }
};

export const formatData = (data: any) => {
  for (let key in data) {
    // replace null values with 'N/A'
    data = {
      ...data,
      [key]: data[key] === null ? 'N/A' : data[key],
    };

    // replace long numbers with a shortned version
    data = {
      ...data,
      [key]: shortenNumber(data[key]),
    };
  }
  return data;
};

export const decimalsToRoundTo = (change: number) => {
  /* Determines how many decimals to round to based on the change 
  in price. For example some quotes only change by $0.0005 in a day. It would 
  make sense then to round off to 4 decimals instead of the usual 2. The function
  returns a minimum value of 2 since prices are typically displayed with a
  minimum of 2 decimals (Ex. $2.10) */

  let decimals = 2;

  while (
    change &&
    (change.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
    }) === '0' ||
      change.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
      }) === '-0')
  ) {
    decimals++;
  }

  return decimals;
};

export const round = (num: number, decimals = 2, trailingZeros = false) => {
  /* Returns a string rounded the given decimals, if trailingZeros is true, 0's will be added
  to the end of the string */
  if (num === 0) return '0';

  let numStr = num.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: trailingZeros ? decimals : 0,
  });

  return numStr;
};

export const formatQuoteData = (quote: Quote) => {
  const { price, change, changesPercentage } = quote;

  // determine number of decimals to round to
  let decimals = decimalsToRoundTo(change);

  // round price, change, and changes percentage
  let formattedQuote: FormattedQuote = {
    ...quote,
    price: round(price, decimals, true),
    change: round(change, decimals, true),
    changesPercentage: round(changesPercentage, 2),
    color: quote.change > 0 ? 'green' : quote.change < 0 ? '#de0e00' : 'black',
  };

  // replace null values with N/A, large numbers with shortened versions, insert commas
  formattedQuote = formatData(formattedQuote);

  return formattedQuote;
};

export const formatStatementData = (
  data: StatementData
): FormattedStatementData => {
  // replaces null values with N/A and large numbers with shortened versions
  return data.map((item) => formatData(item));
};

export const formatValuationDates = (
  data: FormattedValuationData[],
  period: Period
) => {
  // formats date based on period (annual or quarterly)
  if (period === 'quarter') {
    return data.map((item) => {
      const date = new Date(item.date);
      const newDate = date.toLocaleDateString(undefined, {
        month: 'numeric',
        year: 'numeric',
      });
      return {
        ...item,
        newDate,
      };
    });
  } else {
    return data.map((item) => {
      return {
        ...item,
        date: new Date(item.date).getFullYear().toString(),
      };
    });
  }
};

export const formatValuationData = (
  data: ValuationData[],
  period: Period
): FormattedValuationData[] => {
  let formattedData: FormattedValuationData[];
  // replaces null values with N/A and large numbers with shortened versions
  formattedData = data.map((item) => {
    item.earningsYield = item.earningsYield ? item.earningsYield * 100 : null;
    return formatData(item);
  });

  // formats date based on period (annual or quarterly)
  formattedData = formatValuationDates(formattedData, period);

  return formattedData;
};

export const filterChartData = (
  data: HistoricalPrices,
  timeframe: Timeframe
) => {
  // filters out objects not within the timeframe
  if (timeframe === '1D') {
    data = data.filter((item) => {
      const latestDate = new Date(data[0].date).toLocaleDateString();
      const itemDate = new Date(item.date).toLocaleDateString();
      return latestDate === itemDate;
    });
  } else if (timeframe === '5D') {
    data = data.filter((item) => {
      const fiveDaysInMS = 1000 * 60 * 60 * 24 * 5;
      const latestDate = Date.parse(data[0].date);
      const itemDate = Date.parse(item.date);
      return latestDate - itemDate < fiveDaysInMS;
    });
  } else if (timeframe === '1M') {
    data = data.filter((item) => {
      const thirtyDaysInMS = 1000 * 60 * 60 * 24 * 30;
      const latestDate = Date.parse(data[0].date);
      const itemDate = Date.parse(item.date);
      return latestDate - itemDate < thirtyDaysInMS;
    });
  } else if (timeframe === '6M') {
    data = data.filter((item) => {
      const sixMonthsInMS = 1000 * 60 * 60 * 24 * 30 * 6;
      const latestDate = Date.parse(data[0].date);
      const itemDate = Date.parse(item.date);
      return latestDate - itemDate < sixMonthsInMS;
    });
  } else if (timeframe === 'YTD') {
    data = data.filter((item) => {
      const yearBeginning = Date.parse(new Date().getFullYear().toString());
      const itemDate = Date.parse(item.date);
      return itemDate > yearBeginning;
    });
  } else if (timeframe === '1Y') {
    data = data.filter((item) => {
      const oneYearInMS = 1000 * 60 * 60 * 24 * 365;
      const latestDate = Date.parse(data[0].date);
      const itemDate = Date.parse(item.date);
      return latestDate - itemDate < oneYearInMS;
    });
  } else if (timeframe === '5Y') {
    data = data.filter((item) => {
      const fiveYearsInMS = 1000 * 60 * 60 * 24 * 365 * 5;
      const latestDate = Date.parse(data[0].date);
      const itemDate = Date.parse(item.date);
      return latestDate - itemDate < fiveYearsInMS;
    });
  }

  // thins out the amount of data points returned (max 300)
  while (data.length > 300) {
    data = data.filter((item: any, i: number) => {
      return i === 0 || i % 2 === 1;
    });
  }

  return data;
};

export const formatChartData = (
  data: HistoricalPrices,
  timeframe: Timeframe
) => {
  /* removes data points not in the timeframe and thins out number of data
  points (max 300) */
  // formats data to be compatible with chartJS
  let formattedData: FormattedHistoricalPrices;
  formattedData = filterChartData(data, timeframe).map((item) => {
    return {
      x: new Date(item.date),
      y: item.close,
    };
  });

  return formattedData;
};
