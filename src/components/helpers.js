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

export const shortenNumber = (number) => {
  // if value is not a number, return it unaltered
  if (typeof number !== 'number') return number;

  // divide by either a trillion, billion, or million, and add the respective letter (T,B,M)
  // toFixed to round to 4 decimals
  // parseFloat to remove any trailing 0's that toFixed might add
  // if the number is between +million and -million, toLocaleString will add commas where appropriate
  if (number >= 1000000000000 || number <= -1000000000000) {
    return `${parseFloat((number / 1000000000000).toFixed(2))}T`;
  } else if (number >= 1000000000 || number <= -1000000000) {
    return `${parseFloat((number / 1000000000).toFixed(2))}B`;
  } else if (number >= 1000000 || number <= -1000000) {
    return `${parseFloat((number / 1000000).toFixed(2))}M`;
  } else {
    return Number(number).toFixed(2).toLocaleString();
  }
};
