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

export const insertDollarSign = (num: string) => {
  if (num.charAt(0) !== '-') return '$' + num;
  const newNum = num.split('');
  newNum.splice(1, 0, '$');
  return newNum.join('');
};

export const getChangeColor = (change: any) => {
  if (typeof change !== 'number') return 'black';
  return change > 0 ? '#25783b' : change < 0 ? '#cf0007' : 'black';
};

export const pluck = (arr: KeyValueObject[], key: string) => {
  return arr.map((obj) => obj[key]);
};

/* converts an array of objects to an array of arrays for
all properties given in keys array. All objects should have the same keys. */
export const pluckProperties = (arr: KeyValueObject[], keys: string[]) => {
  return keys.map((key) => pluck(arr, key));
};

/* converts an array of objects to an array of arrays for
all properties on the first object. All objects should have the same keys. */
export const pluckAll = (arr: KeyValueObject[]) => {
  if (arr.length > 0) {
    return Object.keys(arr[0] || {}).map((key) => pluck(arr, key));
  }
  return [];
};

export const formatDate = (date: Date, period: Period) => {
  if (period === 'quarter') {
    return date.toLocaleDateString(undefined, {
      month: 'numeric',
      year: 'numeric',
    });
  }
  return date.getFullYear().toString();
};

export const formatDates = (dates: string[], period: Period) => {
  return dates.map((date) => {
    if (isNaN(Date.parse(date))) return 'N/A';
    return formatDate(new Date(date), period);
  });
};

export const getFromLocalStorage = <T>(key: string, fallbackValue: T): T => {
  const savedValue = localStorage.getItem(key);
  if (savedValue) return JSON.parse(savedValue);
  if (fallbackValue instanceof Function) return fallbackValue();
  return fallbackValue;
};

export const filterMarketQuotes = (quotes: MarketQuote[]) => {
  return quotes.filter((quote, i) => i < 4);
};

export const formatMarketQuoteData = (quotes: MarketQuote[]) => {
  return quotes.map((item) => ({
    symbol: item.ticker,
    price: parseFloat(item.price),
    change: item.changes,
    changesPercentage: parseFloat(item.changesPercentage.replace('(', '')),
  }));
};

export const formatMarketQuotes = (quotes: MarketQuote[]) => {
  return formatMarketQuoteData(filterMarketQuotes(quotes));
};
