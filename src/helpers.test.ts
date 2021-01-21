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

describe('sortArrayOfObjects', () => {
  const DATA = [
    { symbol: 'D', price: 14.35 },
    { symbol: 'A', price: 4.21 },
    { symbol: 'B', price: 9.6 },
    { symbol: 'C', price: 1295.23 },
  ];

  it('should sort alphabetically', () => {
    expect(helpers.sortArrayOfObjects(DATA, 'symbol')).toEqual([
      { symbol: 'A', price: 4.21 },
      { symbol: 'B', price: 9.6 },
      { symbol: 'C', price: 1295.23 },
      { symbol: 'D', price: 14.35 },
    ]);
  });

  it('should sort reverse alphabetically', () => {
    expect(helpers.sortArrayOfObjects(DATA, 'symbol', true)).toEqual([
      { symbol: 'D', price: 14.35 },
      { symbol: 'C', price: 1295.23 },
      { symbol: 'B', price: 9.6 },
      { symbol: 'A', price: 4.21 },
    ]);
  });

  it('should sort least to greatest', () => {
    expect(helpers.sortArrayOfObjects(DATA, 'price')).toEqual([
      { symbol: 'A', price: 4.21 },
      { symbol: 'B', price: 9.6 },
      { symbol: 'D', price: 14.35 },
      { symbol: 'C', price: 1295.23 },
    ]);
  });

  it('should sort greatest to least', () => {
    expect(helpers.sortArrayOfObjects(DATA, 'price', true)).toEqual([
      { symbol: 'C', price: 1295.23 },
      { symbol: 'D', price: 14.35 },
      { symbol: 'B', price: 9.6 },
      { symbol: 'A', price: 4.21 },
    ]);
  });

  it('non-existing sort properties should return the object unchanged', () => {
    expect(helpers.sortArrayOfObjects(DATA, 'existentialCrisis')).toEqual(DATA);
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

describe('replaceNullValues', () => {
  it('should replace the null value in an object with a single property', () => {
    expect(helpers.replaceNullValues({ key: null })).toEqual({ key: 'N/A' });
  });

  it('should replace the null value in an object with a multiple properties', () => {
    const DATA = { key1: 'hello', key2: null, key3: 647 };
    const RESULT = { key1: 'hello', key2: 'N/A', key3: 647 };
    expect(helpers.replaceNullValues(DATA)).toEqual(RESULT);
  });

  it('should replace all null values in an object', () => {
    const DATA = { key1: 'hello', key2: null, key3: null };
    const RESULT = { key1: 'hello', key2: 'N/A', key3: 'N/A' };
    expect(helpers.replaceNullValues(DATA)).toEqual(RESULT);
  });
});

describe('shortenNumbers', () => {
  it('should shorten the number in the object', () => {
    const DATA = { key: 567845000 };
    const RESULT = { key: helpers.shortenNumber(567845000) };
    expect(helpers.shortenNumbers(DATA)).toEqual(RESULT);
  });

  it('should shorten the number in an object with multiple properties', () => {
    const DATA = { key1: 'property', key2: 567845000, key3: false };
    const RESULT = {
      key1: 'property',
      key2: helpers.shortenNumber(567845000),
      key3: false,
    };
    expect(helpers.shortenNumbers(DATA)).toEqual(RESULT);
  });

  it('should shorten all number in an object', () => {
    const DATA = {
      key1: 189850720225.21315425,
      key2: 567845000.432,
      key3: false,
    };
    const RESULT = {
      key1: helpers.shortenNumber(189850720225.21315425),
      key2: helpers.shortenNumber(567845000.432),
      key3: false,
    };
    expect(helpers.shortenNumbers(DATA)).toEqual(RESULT);
  });
});

describe('truncateDecimals', () => {
  it('should truncate to a given decimal place', () => {
    expect(helpers.truncateDecimals(12.463, 2)).toBe(12.46);
  });

  it('should truncate to a given decimal place without rounding up', () => {
    expect(helpers.truncateDecimals(157.465689, 4)).toBe(157.4656);
  });

  it('should truncate to 0 decimals when given a negative decimal place', () => {
    expect(helpers.truncateDecimals(1.3, -1)).toBe(1);
  });

  it('should return the number unchanged when the given decimal places exceed the number of decimals on the given number', () => {
    expect(helpers.truncateDecimals(9.345, 10)).toBe(9.345);
  });
});

describe('decimalsToRoundTo', () => {
  it('should return a minimum value of 2', () => {
    expect(helpers.decimalsToRoundTo(345)).toBe(2);
  });

  it('should return the correct number of decimals', () => {
    expect(helpers.decimalsToRoundTo(0.005)).toBe(3);
  });

  it('should return the correct number of decimals', () => {
    expect(helpers.decimalsToRoundTo(0.00003)).toBe(5);
  });

  it('should return the correct number of decimals with negative numbers', () => {
    expect(helpers.decimalsToRoundTo(-0.0009)).toBe(4);
  });
});

describe('roundLocale', () => {
  it('should return the given number to the given decimals in local format', () => {
    expect(helpers.roundLocale(16.54673, 2)).toBe(
      (16.54673).toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })
    );
  });

  it('should include trailing zeros', () => {
    expect(helpers.roundLocale(560.000673, 2, true)).toBe(
      (560.000673).toLocaleString(undefined, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })
    );
  });
});

describe('getChangeColor', () => {
  it('should return black when the given change is not of type number', () => {
    expect(helpers.getChangeColor('N/A')).toBe('black');
  });

  it('should return "black" when change is zero', () => {
    expect(helpers.getChangeColor(0)).toBe('black');
  });

  it('should return "green" when change is positive', () => {
    expect(helpers.getChangeColor(23)).toBe('green');
  });

  it('should return "#de0e00" when change is negative', () => {
    expect(helpers.getChangeColor(-0.001)).toBe('#de0e00');
  });
});

describe('formatQuoteData', () => {
  it('should round price based on the change and be in local string format', () => {
    const DATA = {
      price: 567.675901,
      change: 2.37,
    };

    const FORMATTED_DATA = {
      price: helpers.roundLocale(
        DATA.price,
        helpers.decimalsToRoundTo(DATA.change),
        true
      ),
    };

    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should round change based on the change and be in local string format', () => {
    const DATA = { change: -0.0037 };

    const FORMATTED_DATA = {
      change: helpers.roundLocale(
        DATA.change,
        helpers.decimalsToRoundTo(DATA.change),
        true
      ),
    };

    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should always round changesPercentage to two decimals', () => {
    const DATA = { changesPercentage: -0.7423 };

    const FORMATTED_DATA = {
      changesPercentage: helpers.roundLocale(DATA.changesPercentage, 2),
    };

    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should not include trailing zeros on changesPercentage', () => {
    const DATA = { changesPercentage: -0.0007423 };

    const FORMATTED_DATA = {
      changesPercentage: helpers.roundLocale(DATA.changesPercentage, 2),
    };

    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should add a + in front of positive change', () => {
    const DATA = { change: 12.7 };

    const FORMATTED_DATA = {
      change:
        '+' +
        helpers.roundLocale(
          DATA.change,
          helpers.decimalsToRoundTo(DATA.change),
          true
        ),
    };

    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should add a + in front of positive changesPercentage', () => {
    const DATA = { changesPercentage: 0.5 };

    const FORMATTED_DATA = {
      changesPercentage: '+' + helpers.roundLocale(DATA.changesPercentage, 2),
    };

    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should replace a price not of type number to be "N/A"', () => {
    const DATA = { price: 'failed' };
    const FORMATTED_DATA = { price: 'N/A' };
    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should replace a change not of type number to be "N/A"', () => {
    const DATA = { change: undefined };
    const FORMATTED_DATA = { change: 'N/A' };
    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should replace a changesPercentage not of type number to be "N/A"', () => {
    const DATA = { changesPercentage: false };
    const FORMATTED_DATA = { changesPercentage: 'N/A' };
    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should round price to two decimals when change is not of type number', () => {
    const DATA = {
      price: 8.123,
      change: null,
    };

    const FORMATTED_DATA = {
      price: helpers.roundLocale(DATA.price, 2, true),
    };

    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should add "color: helpers.getChangeColor(change)" property', () => {
    const DATA = { change: 12 };
    const FORMATTED_DATA = { color: helpers.getChangeColor(DATA.change) };
    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should replace null values using helpers.replaceNullValues', () => {
    const DATA = { marketCap: null, avgVolume: null };
    const FORMATTED_DATA = helpers.replaceNullValues(DATA);
    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should shorten numbers using helpers.shortenNumbers', () => {
    const DATA = { marketCap: 8475884175.423879, avgVolume: 52750916.723629 };
    const FORMATTED_DATA = helpers.shortenNumbers(DATA);
    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });
});

describe('formatStatementData', () => {
  it('should replace null values in each object using helpers.replaceNullValues', () => {
    const DATA = [
      { a: false, b: null, c: null },
      { a: null, b: true, c: null },
    ];

    const FORMATTED_DATA = DATA.map((obj) => helpers.replaceNullValues(obj));

    expect(helpers.formatStatementData(DATA)).toEqual(FORMATTED_DATA);
  });

  it('should replace numbers in each object using helpers.shortenNumbers', () => {
    const DATA = [
      { a: false, b: 12314.13213, c: 437590185.14 },
      { a: 13.432875, b: true, c: 10423943214 },
    ];

    const FORMATTED_DATA = DATA.map((obj) => helpers.shortenNumbers(obj));

    expect(helpers.formatStatementData(DATA)).toEqual(FORMATTED_DATA);
  });
});
