export function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
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

export const shortenNumber = (number, decimals = 2, trailingZeros = false) => {
  // if value is not a number, return it unaltered
  if (typeof number !== 'number') return number;

  // divide by either a trillion, billion, or million, and add the respective letter (T,B,M)
  // toLocaleString formats number to be more readable

  const options = {
    minimumSignificantDigits: decimals,
    maximumSignificantDigits: decimals,
  };

  if (number >= 1000000000000 || number <= -1000000000000) {
    return `${(number / 1000000000000).toLocaleString(undefined, options)}T`;
  } else if (number >= 1000000000 || number <= -1000000000) {
    return `${(number / 1000000000).toLocaleString(undefined, options)}B`;
  } else if (number >= 1000000 || number <= -1000000) {
    return `${(number / 1000000).toLocaleString(undefined, options)}M`;
  } else {
    return trailingZeros
      ? number.toFixed(decimals)
      : parseFloat(number.toFixed(decimals)).toLocaleString();
  }
};

export const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? '+1 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return phoneNumberString;
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
