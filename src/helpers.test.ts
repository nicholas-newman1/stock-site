import * as helpers from './helpers';

describe('truncate', () => {
  it('should truncate strings to a given length', () => {
    expect(helpers.truncate('hello world', 6)).toBe('hello');
  });

  it('should not include partial words', () => {
    expect(helpers.truncate('what is the meaning of life?', 10)).toBe(
      'what is'
    );
  });

  it('should return an empty string when given a negative length', () => {
    expect(helpers.truncate('to be or not to be?', -1)).toBe('');
  });

  it('should not truncate strings shorter than the given length', () => {
    expect(helpers.truncate('size matters', 100)).toBe('size matters');
  });
});

describe('getTimeAgoString', () => {
  // takes in minutes, returns ms since epoch subtract given minutes
  const minutesAgo = (minutes: number) => {
    const ms = minutes * 60 * 1000;
    return Date.now() - ms;
  };

  it('should return less than a minute ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(0.9))).toBe(
      'less than a minute ago'
    );
  });

  it('should return a minute ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(1.3))).toBe('A minute ago');
  });

  it('should return minutes ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(59))).toBe('59 minutes ago');
  });

  it('should return an hour ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(65))).toBe('An hour ago');
  });

  it('should return hours ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(120))).toBe('2 hours ago');
  });

  it('should return a day ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(1640))).toBe('A day ago');
  });

  it('should return days ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(5000))).toBe('3 days ago');
  });

  it('should return a year ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(600000))).toBe('A year ago');
  });

  it('should return years ago ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(1600000))).toBe('3 years ago');
  });

  it('should always round down', () => {
    expect(helpers.getTimeAgoString(minutesAgo(30.7))).toBe('30 minutes ago');
    expect(helpers.getTimeAgoString(minutesAgo(2700))).toBe('A day ago');
    expect(helpers.getTimeAgoString(minutesAgo(5700))).toBe('3 days ago');
    expect(helpers.getTimeAgoString(minutesAgo(1000000))).toBe('A year ago');
    expect(helpers.getTimeAgoString(minutesAgo(3000000))).toBe('5 years ago');
  });
});

describe('formatAMPM', () => {
  it('should should convert milliseconds since epoch to hh:mm AM/PM format', () => {
    expect(helpers.formatAMPM(1587625200000)).toBe(
      new Date(1587625200000).toLocaleTimeString([], {
        hour: 'numeric',
        minute: 'numeric',
      })
    );
  });
});

describe('formatPhoneNumber', () => {
  it('should format "xxxxxxxxxx" to "(xxx) xxx-xxxx"', () => {
    expect(helpers.formatPhoneNumber('1234567890')).toBe('(123) 456-7890');
  });

  it('should format "xxx-xxx-xxxx" to "(xxx) xxx-xxxx"', () => {
    expect(helpers.formatPhoneNumber('321-654-0987')).toBe('(321) 654-0987');
  });

  it('should format "xxx xxx xxxx" to "(xxx) xxx-xxxx"', () => {
    expect(helpers.formatPhoneNumber('246 135 9780')).toBe('(246) 135-9780');
  });

  it('should format "(xxx) xxx xxxx" to "(xxx) xxx-xxxx"', () => {
    expect(helpers.formatPhoneNumber('(666) 666 6666')).toBe('(666) 666-6666');
  });

  it('should format "xxx xxxxxxx" to "(xxx) xxx-xxxx"', () => {
    expect(helpers.formatPhoneNumber('666 8675309')).toBe('(666) 867-5309');
  });
});

describe('sortArrayOfQuotes', () => {
  const DATA = [
    { symbol: 'D', price: 14.35, changesPercentage: 4.5 },
    { symbol: 'A', price: 4.21, changesPercentage: 8.5 },
    { symbol: 'B', price: 9.6, changesPercentage: 1.5 },
    { symbol: 'C', price: 1295.23, changesPercentage: 90.5 },
  ] as Quote[];

  it('should sort alphabetically', () => {
    expect(helpers.sortArrayOfQuotes(DATA, 'symbol')).toEqual([
      { symbol: 'A', price: 4.21, changesPercentage: 8.5 },
      { symbol: 'B', price: 9.6, changesPercentage: 1.5 },
      { symbol: 'C', price: 1295.23, changesPercentage: 90.5 },
      { symbol: 'D', price: 14.35, changesPercentage: 4.5 },
    ]);
  });

  it('should sort reverse alphabetically', () => {
    expect(helpers.sortArrayOfQuotes(DATA, 'symbol', true)).toEqual([
      { symbol: 'D', price: 14.35, changesPercentage: 4.5 },
      { symbol: 'C', price: 1295.23, changesPercentage: 90.5 },
      { symbol: 'B', price: 9.6, changesPercentage: 1.5 },
      { symbol: 'A', price: 4.21, changesPercentage: 8.5 },
    ]);
  });

  it('should sort least to greatest', () => {
    expect(helpers.sortArrayOfQuotes(DATA, 'price')).toEqual([
      { symbol: 'A', price: 4.21, changesPercentage: 8.5 },
      { symbol: 'B', price: 9.6, changesPercentage: 1.5 },
      { symbol: 'D', price: 14.35, changesPercentage: 4.5 },
      { symbol: 'C', price: 1295.23, changesPercentage: 90.5 },
    ]);
  });

  it('should sort greatest to least', () => {
    expect(helpers.sortArrayOfQuotes(DATA, 'price', true)).toEqual([
      { symbol: 'C', price: 1295.23, changesPercentage: 90.5 },
      { symbol: 'D', price: 14.35, changesPercentage: 4.5 },
      { symbol: 'B', price: 9.6, changesPercentage: 1.5 },
      { symbol: 'A', price: 4.21, changesPercentage: 8.5 },
    ]);
  });
});

describe('shortenNumber', () => {
  it('should convert to trillions, round to two decimals, and add a T', () => {
    expect(helpers.shortenNumber(2345786908542)).toBe('2.35T');
  });

  it('should convert to billions, round to two decimals, and add a B', () => {
    expect(helpers.shortenNumber(2342786908)).toBe('2.34B');
  });

  it('should convert to millions, round to two decimals, and add an M', () => {
    expect(helpers.shortenNumber(4392786)).toBe('4.39M');
  });

  it('should return thousands in local format and round to two decimals', () => {
    expect(helpers.shortenNumber(11456.6743)).toBe(
      (11456.6743).toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })
    );
  });

  it('should not include trailing zeros on numbers >= 1 trillion', () => {
    expect(helpers.shortenNumber(243199000000000)).toBe('243.2T');
  });

  it('should not include trailing zeros on numbers >= 1 billion', () => {
    expect(helpers.shortenNumber(9000000000)).toBe('9B');
  });

  it('should not include trailing zeros on numbers >= 1 million', () => {
    expect(helpers.shortenNumber(14799000)).toBe('14.8M');
  });

  it('should include trailing zeros on number < 1 million', () => {
    expect(helpers.shortenNumber(132985.799)).toBe(
      (132985.799).toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
    );
  });
});
