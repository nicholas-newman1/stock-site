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

describe('insertDollarSign', () => {
  it('should insert a dollar sign at 0 index on positive numbers', () => {
    expect(helpers.insertDollarSign('123,234,345.12')).toBe('$123,234,345.12');
  });

  it('should insert a dollar sign at 1 index on negative numbers', () => {
    expect(helpers.insertDollarSign('-234,345')).toBe('-$234,345');
  });
});

describe('getChangeColor', () => {
  it('should return black when the given change is not of type number', () => {
    expect(helpers.getChangeColor('N/A')).toBe('black');
  });

  it('should return "black" when change is zero', () => {
    expect(helpers.getChangeColor(0)).toBe('black');
  });

  it('should return "#25783b" when change is positive', () => {
    expect(helpers.getChangeColor(23)).toBe('#25783b');
  });

  it('should return "#cf0007" when change is negative', () => {
    expect(helpers.getChangeColor(-0.001)).toBe('#cf0007');
  });
});

describe('formatQuoteData', () => {
  it('should use helpers.roundLocale and helpers.decimalsToRoundTo(change) to round price', () => {
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

  it('should use helpers.roundLocale and helpers.decimalsToRoundTo(change) to round change', () => {
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

  it('should use helpers.roundLocale with decimals = 2 to round changesPercentage', () => {
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

  it('should use helpers.roundLocale with decimals = 2 when change is not of type number', () => {
    const DATA = {
      price: 8.123,
      change: null,
    };

    const FORMATTED_DATA = {
      price: helpers.roundLocale(DATA.price, 2, true),
    };

    expect(helpers.formatQuoteData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should add a color property using helpers.getChangeColor(change)', () => {
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

describe('formatValuationDates', () => {
  it('should convert quarterly dates to localeDateString with month and year', () => {
    const DATA = [
      { date: '2020-09-26' },
      { date: '2020-06-27' },
      { date: '2020-03-28' },
    ];

    const FORMATTED_DATA = DATA.map((item) => ({
      ...item,
      date: new Date(item.date).toLocaleDateString([], {
        month: 'numeric',
        year: 'numeric',
      }),
    }));

    expect(helpers.formatValuationDates(DATA, 'quarter')).toEqual(
      FORMATTED_DATA
    );
  });

  it('should replace invalid quarterly dates with "N/A"', () => {
    const DATA = [{ date: 'fewfe6' }, { date: null }, { date: true }];

    const FORMATTED_DATA = DATA.map((item) => ({
      ...item,
      date: 'N/A',
    }));

    expect(helpers.formatValuationDates(DATA, 'quarter')).toEqual(
      FORMATTED_DATA
    );
  });

  it('should convert annual dates to show only the year', () => {
    const DATA = [
      { date: '2020-09-26' },
      { date: '2019-06-27' },
      { date: '2018-03-28' },
    ];

    const FORMATTED_DATA = [
      { date: '2020' },
      { date: '2019' },
      { date: '2018' },
    ];

    expect(helpers.formatValuationDates(DATA, '')).toEqual(FORMATTED_DATA);
  });

  it('should replace invalid annual dates with "N/A"', () => {
    const DATA = [{ date: 'fewfe6' }, { date: null }, { date: true }];

    const FORMATTED_DATA = DATA.map((item) => ({
      ...item,
      date: 'N/A',
    }));

    expect(helpers.formatValuationDates(DATA, '')).toEqual(FORMATTED_DATA);
  });

  it('should not alter any values except quarterlly dates', () => {
    const DATA = [
      {
        symbol: 'AAPL',
        date: '2020-09-26',
        marketCap: 1915229781102.37817,
      },
      {
        symbol: 'AAPL',
        date: '2019-06-27',
        marketCap: 1525055207240.29199,
      },
      {
        symbol: 'AAPL',
        date: '2018-03-28',
        marketCap: 1080171439180.40405,
      },
    ];

    const FORMATTED_DATA = DATA.map((item) => ({
      ...item,
      date: new Date(item.date).toLocaleDateString([], {
        month: 'numeric',
        year: 'numeric',
      }),
    }));

    expect(helpers.formatValuationDates(DATA, 'quarter')).toEqual(
      FORMATTED_DATA
    );
  });

  it('should not alter any values except annual dates', () => {
    const DATA = [
      {
        symbol: 'AAPL',
        date: '2020-09-26',
        marketCap: 1915229781102.37817,
      },
      {
        symbol: 'AAPL',
        date: '2019-06-27',
        marketCap: 1525055207240.29199,
      },
      {
        symbol: 'AAPL',
        date: '2018-03-28',
        marketCap: 1080171439180.40405,
      },
    ];

    const FORMATTED_DATA = [
      {
        symbol: 'AAPL',
        date: '2020',
        marketCap: 1915229781102.37817,
      },
      {
        symbol: 'AAPL',
        date: '2019',
        marketCap: 1525055207240.29199,
      },
      {
        symbol: 'AAPL',
        date: '2018',
        marketCap: 1080171439180.40405,
      },
    ];

    expect(helpers.formatValuationDates(DATA, '')).toEqual(FORMATTED_DATA);
  });
});

describe('formatValuationData', () => {
  it('should replace null values in each object using helpers.replaceNullValues', () => {
    const DATA = [
      { a: false, b: null, c: null },
      { a: null, b: true, c: null },
    ];

    const FORMATTED_DATA = DATA.map((obj) => helpers.replaceNullValues(obj));

    expect(helpers.formatValuationData(DATA, '')).toMatchObject(FORMATTED_DATA);
  });

  it('should replace numbers in each object using helpers.shortenNumbers', () => {
    const DATA = [
      { a: false, b: 12314.13213, c: 437590185.14 },
      { a: 13.432875, b: true, c: 10423943214 },
    ];

    const FORMATTED_DATA = DATA.map((obj) => helpers.shortenNumbers(obj));

    expect(helpers.formatValuationData(DATA, '')).toMatchObject(FORMATTED_DATA);
  });

  it('should multiply earningsYield * 100 before applying helpers.shortenNumbers', () => {
    const DATA = [
      { earningsYield: 0.15 },
      { earningsYield: 0.17 },
      { earningsYield: 0.12 },
    ];

    const FORMATTED_DATA = [
      helpers.shortenNumbers({ earningsYield: 15 }),
      helpers.shortenNumbers({ earningsYield: 17 }),
      helpers.shortenNumbers({ earningsYield: 12 }),
    ];

    expect(helpers.formatValuationData(DATA, '')).toMatchObject(FORMATTED_DATA);
  });

  it('should set earningsYield to "N/A"', () => {
    const DATA = [{}];
    const FORMATTED_DATA = [{ earningsYield: 'N/A' }];

    expect(helpers.formatValuationData(DATA, '')).toMatchObject(FORMATTED_DATA);
  });

  it('should format annual dates with helpers.formatValuationDates', () => {
    const DATA = [
      { date: '2020-09-26' },
      { date: '2019-06-27' },
      { date: null },
      { date: '2018-03-28' },
    ];

    const FORMATTED_DATA = helpers.formatValuationDates(DATA, '');

    expect(helpers.formatValuationData(DATA, '')).toMatchObject(FORMATTED_DATA);
  });

  it('should format quarterly dates with helpers.formatValuationDates', () => {
    const DATA = [
      { date: '2020-09-26' },
      { date: '2020-06-27' },
      { date: '2020-03-28' },
    ];

    const FORMATTED_DATA = helpers.formatValuationDates(DATA, 'quarter');

    expect(helpers.formatValuationData(DATA, 'quarter')).toMatchObject(
      FORMATTED_DATA
    );
  });
});

describe('filterChartData', () => {
  const DATA = [
    { date: '2021-01-21 16:00:00' },
    { date: '2021-01-21 12:00:00' },
    { date: '2021-01-20 12:00:00' },
    { date: '2021-01-19 12:00:00' },
    { date: '2021-01-15 16:00:00' },
    { date: '2021-01-06 12:00:00' },
    { date: '2020-12-23 12:00:00' },
    { date: '2020-12-19 16:00:00' },
    { date: '2020-12-07 12:00:00' },
    { date: '2020-10-07 12:00:00' },
    { date: '2020-08-07 12:00:00' },
    { date: '2020-06-07 12:00:00' },
    { date: '2020-03-31 16:00:00' },
    { date: '2020-01-31 12:00:00' },
    { date: '2020-01-10 12:00:00' },
    { date: '2019-01-25 12:00:00' },
    { date: '2018-01-25 12:00:00' },
    { date: '2017-01-25 12:00:00' },
    { date: '2016-01-25 12:00:00' },
    { date: '2016-01-17 12:00:00' },
    { date: '2015-01-25 12:00:00' },
  ] as HistoricalPrices;

  it("should filter out any objects not within 1D of the first object's date", () => {
    const FILTERED_DATA = [
      { date: '2021-01-21 16:00:00' },
      { date: '2021-01-21 12:00:00' },
    ];

    expect(helpers.filterChartData(DATA, '1D')).toMatchObject(FILTERED_DATA);
  });

  it("should filter out any objects not within 5D of the first object's date", () => {
    const FILTERED_DATA = [
      { date: '2021-01-21 16:00:00' },
      { date: '2021-01-21 12:00:00' },
      { date: '2021-01-20 12:00:00' },
      { date: '2021-01-19 12:00:00' },
    ];

    expect(helpers.filterChartData(DATA, '5D')).toMatchObject(FILTERED_DATA);
  });

  it("should filter out any objects not within 1M of the first object's date", () => {
    const FILTERED_DATA = [
      { date: '2021-01-21 16:00:00' },
      { date: '2021-01-21 12:00:00' },
      { date: '2021-01-20 12:00:00' },
      { date: '2021-01-19 12:00:00' },
      { date: '2021-01-15 16:00:00' },
      { date: '2021-01-06 12:00:00' },
      { date: '2020-12-23 12:00:00' },
    ];

    expect(helpers.filterChartData(DATA, '1M')).toMatchObject(FILTERED_DATA);
  });

  it("should filter out any objects not within YTD of the first object's date", () => {
    const FILTERED_DATA = [
      { date: '2021-01-21 16:00:00' },
      { date: '2021-01-21 12:00:00' },
      { date: '2021-01-20 12:00:00' },
      { date: '2021-01-19 12:00:00' },
      { date: '2021-01-15 16:00:00' },
      { date: '2021-01-06 12:00:00' },
    ];

    expect(helpers.filterChartData(DATA, 'YTD')).toMatchObject(FILTERED_DATA);
  });

  it("should filter out any objects not within 1Y of the first object's date", () => {
    const FILTERED_DATA = [
      { date: '2021-01-21 16:00:00' },
      { date: '2021-01-21 12:00:00' },
      { date: '2021-01-20 12:00:00' },
      { date: '2021-01-19 12:00:00' },
      { date: '2021-01-15 16:00:00' },
      { date: '2021-01-06 12:00:00' },
      { date: '2020-12-23 12:00:00' },
      { date: '2020-12-19 16:00:00' },
      { date: '2020-12-07 12:00:00' },
      { date: '2020-10-07 12:00:00' },
      { date: '2020-08-07 12:00:00' },
      { date: '2020-06-07 12:00:00' },
      { date: '2020-03-31 16:00:00' },
      { date: '2020-01-31 12:00:00' },
    ];

    expect(helpers.filterChartData(DATA, '1Y')).toMatchObject(FILTERED_DATA);
  });

  it("should filter out any objects not within 5Y of the first object's date", () => {
    const FILTERED_DATA = [
      { date: '2021-01-21 16:00:00' },
      { date: '2021-01-21 12:00:00' },
      { date: '2021-01-20 12:00:00' },
      { date: '2021-01-19 12:00:00' },
      { date: '2021-01-15 16:00:00' },
      { date: '2021-01-06 12:00:00' },
      { date: '2020-12-23 12:00:00' },
      { date: '2020-12-19 16:00:00' },
      { date: '2020-12-07 12:00:00' },
      { date: '2020-10-07 12:00:00' },
      { date: '2020-08-07 12:00:00' },
      { date: '2020-06-07 12:00:00' },
      { date: '2020-03-31 16:00:00' },
      { date: '2020-01-31 12:00:00' },
      { date: '2020-01-10 12:00:00' },
      { date: '2019-01-25 12:00:00' },
      { date: '2018-01-25 12:00:00' },
      { date: '2017-01-25 12:00:00' },
      { date: '2016-01-25 12:00:00' },
    ];

    expect(helpers.filterChartData(DATA, '5Y')).toMatchObject(FILTERED_DATA);
  });

  it('should filter to length <= 300 with helpers.filterNumberOfDataPoints', () => {
    const DATA = [];

    for (let i = 0; i < 400; i++) {
      DATA.push({ date: `${i}` });
    }

    const FILTERED_DATA = helpers.filterChartData(
      DATA as HistoricalPrices,
      'MAX'
    );

    expect(FILTERED_DATA.length).toBeLessThanOrEqual(300);
  });
});

describe('filterNumberOfDataPoints', () => {
  interface DummyData {
    date: string;
  }

  const DATA: DummyData[] = [];

  for (let i = 0; i < 400; i++) {
    DATA.push({ date: `${i}` });
  }

  const FILTERED_DATA = helpers.filterNumberOfDataPoints(
    DATA as HistoricalPrices,
    300
  );

  it('should not return an array with over 300 objects', () => {
    expect(FILTERED_DATA.length).toBeLessThanOrEqual(300);
  });

  it('should not filter out the first object', () => {
    expect(FILTERED_DATA[0]).toEqual(DATA[0]);
  });
});

describe('formatChartData', () => {
  const DATA = [
    { date: '2021-01-21 16:00:00', close: 130 },
    { date: '2021-01-21 12:00:00', close: 135 },
    { date: '2021-01-20 12:00:00', close: 133 },
    { date: '2021-01-19 12:00:00', close: 132 },
    { date: '2021-01-15 16:00:00', close: 137 },
    { date: '2021-01-06 12:00:00', close: 131 },
    { date: '2020-12-23 12:00:00', close: 133 },
    { date: '2020-12-19 16:00:00', close: 139 },
    { date: '2020-12-07 12:00:00', close: 133 },
  ] as HistoricalPrices;

  it('should convert date strings into Date objects and assign them to property "x"', () => {
    const FORMATTED_DATA = DATA.map((item) => ({
      x: new Date(item.date),
    }));

    expect(helpers.formatChartData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should assign "close" property to "y" property', () => {
    const FORMATTED_DATA = DATA.map((item) => ({
      y: item.close,
    }));

    expect(helpers.formatChartData(DATA)).toMatchObject(FORMATTED_DATA);
  });
});

describe('pluckProperties', () => {
  const DATA = [
    { foo: 1, bar: 'one' },
    { foo: 2, bar: 'two' },
    { foo: 3, bar: 'three' },
  ];
  it('should extract values from objects', () => {
    const PLUCKED_DATA = [
      [1, 2, 3],
      ['one', 'two', 'three'],
    ];

    expect(helpers.pluckProperties(DATA, ['foo', 'bar'])).toEqual(PLUCKED_DATA);
  });

  it('should only use the keys passed', () => {
    const PLUCKED_DATA = [[1, 2, 3]];

    expect(helpers.pluckProperties(DATA, ['foo'])).toEqual(PLUCKED_DATA);
  });

  it('should use all the keys passed', () => {
    const PLUCKED_DATA = [
      [1, 2, 3],
      ['one', 'two', 'three'],
      [undefined, undefined, undefined],
    ];

    expect(helpers.pluckProperties(DATA, ['foo', 'bar', 'baz'])).toEqual(
      PLUCKED_DATA
    );
  });
});
