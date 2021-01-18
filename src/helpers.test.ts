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

  it('should return minutes ago', () => {
    expect(helpers.getTimeAgoString(minutesAgo(59))).toBe('59 minutes ago');
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
