import {
  dummyDailyData,
  dummyIntradayData,
  dummyFiveDayData,
  dummyOneMonthData,
} from '../../utils/dummyData';

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
  if (timeframe === '1D') return dummyIntradayData;
  if (timeframe === '5D') return dummyFiveDayData;
  if (timeframe === '1M') return dummyOneMonthData;
  return dummyDailyData.historical;
};
