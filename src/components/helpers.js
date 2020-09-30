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

export const wait = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};
