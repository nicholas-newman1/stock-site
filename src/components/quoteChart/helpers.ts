import {
  dummyDailyData,
  dummyIntradayData,
  dummyFiveDayData,
  dummyOneMonthData,
} from '../../dummyData';

export const getTimeScaleFormat = (timeframe: Timeframe) => {
  let timeScaleFormat: TimeScaleFormat;
  if (timeframe === '1D') {
    timeScaleFormat = 'hour';
  } else if (timeframe === '5D' || timeframe === '1M') {
    timeScaleFormat = 'day';
  } else {
    timeScaleFormat = 'month';
  }
  return timeScaleFormat;
};

export const getTooltipFormat = (timeframe: Timeframe) => {
  let tooltipFormat: TooltipFormat;
  if (timeframe === '1D') {
    tooltipFormat = 'h:mm a';
  } else if (timeframe === '5D' || timeframe === '1M') {
    tooltipFormat = 'MMM D h:mm a';
  } else {
    tooltipFormat = 'MMM D, YYYY';
  }
  return tooltipFormat;
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
  let dummyData = dummyDailyData.historical; // effectively an else
  if (timeframe === '1D') dummyData = dummyIntradayData;
  if (timeframe === '5D') dummyData = dummyFiveDayData;
  if (timeframe === '1M') dummyData = dummyOneMonthData;
  return dummyData;
};
