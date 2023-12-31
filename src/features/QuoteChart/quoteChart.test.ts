import {
  filterChartData,
  filterNumberOfDataPoints,
  formatChartData,
} from './helpers';

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

    expect(filterChartData(DATA, '1D')).toMatchObject(FILTERED_DATA);
  });

  it("should filter out any objects not within 5D of the first object's date", () => {
    const FILTERED_DATA = [
      { date: '2021-01-21 16:00:00' },
      { date: '2021-01-21 12:00:00' },
      { date: '2021-01-20 12:00:00' },
      { date: '2021-01-19 12:00:00' },
    ];

    expect(filterChartData(DATA, '5D')).toMatchObject(FILTERED_DATA);
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

    expect(filterChartData(DATA, '1M')).toMatchObject(FILTERED_DATA);
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

    expect(filterChartData(DATA, 'YTD')).toMatchObject(FILTERED_DATA);
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

    expect(filterChartData(DATA, '1Y')).toMatchObject(FILTERED_DATA);
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

    expect(filterChartData(DATA, '5Y')).toMatchObject(FILTERED_DATA);
  });

  it('should filter to length <= 300 with filterNumberOfDataPoints', () => {
    const DATA = [];

    for (let i = 0; i < 400; i++) {
      DATA.push({ date: `${i}` });
    }

    const FILTERED_DATA = filterChartData(DATA as HistoricalPrices, 'MAX');

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

  const FILTERED_DATA = filterNumberOfDataPoints(DATA as HistoricalPrices, 300);

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

    expect(formatChartData(DATA)).toMatchObject(FORMATTED_DATA);
  });

  it('should assign "close" property to "y" property', () => {
    const FORMATTED_DATA = DATA.map((item) => ({
      y: item.close,
    }));

    expect(formatChartData(DATA)).toMatchObject(FORMATTED_DATA);
  });
});
