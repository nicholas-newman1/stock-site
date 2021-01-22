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
  if (timeAgo < MINUTE * 2) return `A minute ago`;
  if (timeAgo < HOUR) return `${Math.floor(timeAgo / MINUTE)} minutes ago`;
  if (timeAgo < HOUR * 2) return `An hour ago`;
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

// Make phone numbers more readable
export const formatPhoneNumber = (phoneNumberString: string) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return phoneNumberString;
};

// Takes in an array of quotes and sorts based on the given property
export const sortArrayOfObjects = <T>(
  data: T[],
  property: string,
  reverseOrder = false
) => {
  const sortedData = [...data];
  const compare = (a: { [key: string]: any }, b: { [key: string]: any }) => {
    let comparison = 0;
    if (a[property] < b[property]) comparison = -1;
    if (a[property] > b[property]) comparison = 1;
    return reverseOrder ? comparison * -1 : comparison;
  };
  sortedData.sort(compare);
  return sortedData;
};

/* Returns a string where, if necessary, a given number is shortened and a
letter is added. Rounded to 2 decimals. Numbers < 1 million should include
trailing zeros */
export const shortenNumber = (number: number) => {
  if (typeof number !== 'number') return number;

  if (number >= 1000000000000 || number <= -1000000000000) {
    return `${parseFloat((number / 1000000000000).toFixed(2))}T`;
  } else if (number >= 1000000000 || number <= -1000000000) {
    return `${parseFloat((number / 1000000000).toFixed(2))}B`;
  } else if (number >= 1000000 || number <= -1000000) {
    return `${parseFloat((number / 1000000).toFixed(2))}M`;
  } else {
    return number.toLocaleString(undefined, {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  }
};

// Takes in an object and replaces any null values with 'N/A'
export const replaceNullValues = (data: { [key: string]: any }) => {
  for (let key in data) {
    const value = data[key];
    data = {
      ...data,
      [key]: value === null ? 'N/A' : value,
    };
  }

  return data;
};

// Takes in an object and replaces numbers with shortenNumber()
export const shortenNumbers = (data: { [key: string]: any }) => {
  for (let key in data) {
    const value = data[key];
    data = {
      ...data,
      [key]: typeof value === 'number' ? shortenNumber(value) : value,
    };
  }

  return data;
};

// truncates a numbers decimals without rounding
export const truncateDecimals = (num: number, fixed: number) => {
  var re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
  return parseFloat(num.toString().match(re)![0]);
};

/* 
- Determines how many decimals to round to based on the change in price.
- For example: some quotes only change by $0.0005 in a day. It would make
sense then to round off prices to 4 decimals.
- The function returns a minimum value of 2 decimals since prices are
typically displayed with a 2 decimals and trailing zeros (Ex. $2.00) 
*/
export const decimalsToRoundTo = (change: number) => {
  let decimals = 2;

  while (change !== 0 && truncateDecimals(change, decimals) === 0) {
    decimals++;
  }

  return decimals;
};

/* returns a number in local string format rounded to a given decimal place */
export const roundLocale = (
  num: number,
  decimals: number,
  trailingZeros = false
) => {
  if (num === 0) return '0';

  let numStr = num.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: trailingZeros ? decimals : 0,
  });

  return numStr;
};

export const getChangeColor = (change: any) => {
  if (typeof change !== 'number') return 'black';
  return change > 0 ? 'green' : change < 0 ? '#de0e00' : 'black';
};

// formats the data in the quote to be more readable
export const formatQuoteData = (quote: APIObject) => {
  const { price, change, changesPercentage } = quote;

  // determine number of decimals to round to
  let decimals = typeof change === 'number' ? decimalsToRoundTo(change) : 2;

  // variables to hold formatted values
  let priceStr: string;
  let changeStr: string;
  let changesPercentageStr: string;

  // round price
  if (typeof price === 'number') {
    priceStr = roundLocale(price, decimals, true);
  } else {
    priceStr = 'N/A';
  }

  // round change and add '+' if necessary
  if (typeof change === 'number') {
    changeStr = roundLocale(change, decimals, true);
    if (change > 0) changeStr = '+' + changeStr;
  } else {
    changeStr = 'N/A';
  }

  // round changesPercentage and add '+' if necessary
  if (typeof changesPercentage === 'number') {
    changesPercentageStr = roundLocale(changesPercentage, 2);
    if (changesPercentage > 0)
      changesPercentageStr = '+' + changesPercentageStr;
  } else {
    changesPercentageStr = 'N/A';
  }

  // set formatted price, change, and changesPercentage. Add change color property
  let formattedQuote: APIObject = {
    ...quote,
    price: priceStr,
    change: changeStr,
    changesPercentage: changesPercentageStr,
    color: getChangeColor(change),
  };

  /* replace null values with N/A, large numbers with shortened versions in
  local format */
  formattedQuote = shortenNumbers(replaceNullValues(formattedQuote));

  return formattedQuote;
};

// replaces null values with N/A and large numbers with shortened versions
export const formatStatementData = (data: APIObject[]) => {
  return data.map((item) => shortenNumbers(replaceNullValues(item)));
};

// formats date based on period (annual or quarterly)
export const formatValuationDates = (data: APIObject[], period: Period) => {
  if (period === 'quarter') {
    return data.map((item) => {
      if (!isNaN(Date.parse(item.date))) {
        const date = new Date(item.date);
        const newDate = date.toLocaleDateString(undefined, {
          month: 'numeric',
          year: 'numeric',
        });
        return {
          ...item,
          date: newDate,
        };
      } else {
        return {
          ...item,
          date: 'N/A',
        };
      }
    });
  } else {
    return data.map((item) => {
      return {
        ...item,
        date: !isNaN(Date.parse(item.date))
          ? new Date(item.date).getFullYear().toString()
          : 'N/A',
      };
    });
  }
};

// formats the data to be more readable
export const formatValuationData = (data: APIObject[], period: Period) => {
  let formattedData: APIObject[];

  formattedData = data.map((item) => {
    // multiply earningsYield to be a percentage instead of decimal
    item.earningsYield =
      typeof item.earningsYield === 'number' ? item.earningsYield * 100 : null;

    // replaces null values with N/A and large numbers with shortened versions
    return shortenNumbers(replaceNullValues(item));
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
  data = filterNumberOfDataPoints(data, 300);

  return data;
};

// returns an array with length <= max given
export const filterNumberOfDataPoints = (
  data: HistoricalPrices,
  max: number
) => {
  while (data.length > max) {
    data = data.filter((item: any, i: number) => {
      // keeps first item in array (important to display current stock price)
      // filters relatively evenly accros the array with i % 2 === 1
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
