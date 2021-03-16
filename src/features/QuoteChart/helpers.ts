export const getTimeScaleFormat = (timeframe: Timeframe) => {
  if (timeframe === '1D') {
    return 'hour';
  } else if (timeframe === '5D' || timeframe === '1M') {
    return 'day';
  } else {
    return 'month';
  }
};

export const getTooltipFormat = (timeframe: Timeframe) => {
  if (timeframe === '1D') {
    return 'h:mm a';
  } else if (timeframe === '5D' || timeframe === '1M') {
    return 'MMM D h:mm a';
  } else {
    return 'MMM D, YYYY';
  }
};

export const getEndpoint = (symbol: string, timeframe: Timeframe) => {
  let interval = '';
  let endpoint = 'historical-chart';
  if (timeframe === '1D') interval = '1min';
  if (timeframe === '5D') interval = '5min';
  if (timeframe === '1M') interval = '1hour';
  if (interval === '') endpoint = 'historical-price-full'; // effectively an else
  return `${endpoint}/${interval}/${symbol}`;
};

export const getDummyData = (timeframe: Timeframe) => {
  if (timeframe === '1D') return 'intradayData';
  if (timeframe === '5D') return 'fiveDayData';
  if (timeframe === '1M') return 'oneMonthData';
  return 'historicalData';
};

export const filterChartData = (
  data: HistoricalPrices,
  timeframe: Timeframe
) => {
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
      const yearBeginning = Date.parse(new Date().getFullYear().toString());
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
  data = filterNumberOfDataPoints(data, 300);

  return data;
};

// returns an array with length <= max given
export const filterNumberOfDataPoints = (
  data: HistoricalPrices,
  max: number
) => {
  while (data.length > max) {
    data = data.filter((item: any, i: number) => {
      // keeps first item in array (important to display current stock price)
      // filters relatively evenly accros the array with i % 2 === 1
      return i === 0 || i % 2 === 1;
    });
  }

  return data;
};

// formats data to be compatible with chartJS
export const formatChartData = (data: HistoricalPrices) => {
  let formattedData: FormattedHistoricalPrices = data.map((item) => {
    return {
      x: new Date(item.date),
      y: item.close,
    };
  });

  return formattedData;
};
