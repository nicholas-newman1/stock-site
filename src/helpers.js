export function truncate(str, n) {
  // shorten string based on n
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1);
  return subString.substr(0, subString.lastIndexOf(' '));
}

export const getTimeAgoString = (date) => {
  const timeAgo = new Date(Date.now() - Date.parse(date));
  if (timeAgo.getMinutes() < 1) return `less than a minute ago`;
  if (timeAgo.getHours() < 1) return `${timeAgo.getMinutes()} minutes ago`;
  if (timeAgo.getHours() === 1) return `An hour ago`;
  if (timeAgo.getHours() > 1) return `${timeAgo.getHours()} hours ago`;
};

export const formatAMPM = (timestamp) => {
  // convert timestamp to AM/PM time
  const date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

export const formatPhoneNumber = (phoneNumberString) => {
  // Make phone numbers more readable
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return phoneNumberString;
};

export const sortData = (data, property, reverseOrder = false) => {
  const compare = (a, b) => {
    let comparison = 0;
    if (a[property] < b[property]) comparison = -1;
    if (a[property] > b[property]) comparison = 1;
    return reverseOrder ? comparison * -1 : comparison;
  };
  data.sort(compare);
};

export const shortenNumber = (number, decimals = 2) => {
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

export const formatData = (data) => {
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

export const decimalsToRoundTo = (change) => {
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

export const round = (num, decimals = 2, trailingZeros = false) => {
  /* Returns a string rounded the given decimals, if trailingZeros is true, 0's will be added
  to the end of the string */
  if (num === 0) return 0;

  num = num.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: trailingZeros ? decimals : 0,
  });

  return num;
};

export const formatQuoteData = (data) => {
  const { price, change, changesPercentage } = data;

  // determine number of decimals to round to
  let decimals = decimalsToRoundTo(change);

  // round price, change, and changes percentage
  data = {
    ...data,
    price: round(price, decimals, true),
    change: round(change, decimals, true),
    changesPercentage: round(changesPercentage, 2),
  };

  // replace null values with N/A, large numbers with shortened versions, insert commas
  data = formatData(data);

  return data;
};

export const formatStatementData = (data) => {
  // replaces null values with N/A and large numbers with shortened versions
  return data.map((item) => formatData(item));
};

export const formatValuationDates = (data, period) => {
  // formats date based on period (annual or quarterly)
  if (period === 'quarter') {
    data = data.map((item) => {
      let date = new Date(item.date);
      date = date.toLocaleDateString(undefined, {
        month: 'numeric',
        year: 'numeric',
      });
      return {
        ...item,
        date,
      };
    });
  } else {
    data = data.map((item) => {
      return {
        ...item,
        date: new Date(item.date).getFullYear().toString(),
      };
    });
  }

  return data;
};

export const formatValuationData = (data, period) => {
  // replaces null values with N/A and large numbers with shortened versions
  data = data.map((item) => {
    item.earningsYield = item.earningsYield * 100;
    return formatData(item);
  });

  // formats date based on period (annual or quarterly)
  data = formatValuationDates(data, period);

  return data;
};

export const filterChartData = (data, timeframe) => {
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
      const yearBeginning = Date.parse(
        new Date(new Date().getFullYear().toString())
      );
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
    data = data.filter((item, i) => {
      return i === 0 || i % 2 === 1;
    });
  }

  return data;
};

export const formatChartData = (data, timeframe) => {
  /* removes data points not in the timeframe and thins out number of data
  points (max 300) */
  data = filterChartData(data, timeframe);

  // formats data to be compatible with chartJS
  data = data.map((item) => {
    return {
      x: new Date(item.date),
      y: item.close,
    };
  });

  return data;
};
