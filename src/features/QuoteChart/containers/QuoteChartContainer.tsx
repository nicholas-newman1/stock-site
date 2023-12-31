import React, { useEffect, useState } from 'react';
import QuoteChart from '../components/QuoteChart';
import {
  getTimeScaleFormat,
  getTooltipFormat,
  filterChartData,
  formatChartData,
} from '../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import { fetchHistoricalPricesData } from '../quoteChartSlice';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';

interface Props {
  symbol: string;
}

const QuoteChartContainer: React.FC<Props> = ({ symbol }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>('1D');

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state: AppState) => state.quoteChart
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  useEffect(() => {
    dispatch(fetchHistoricalPricesData(symbol, timeframe));
  }, [dispatch, symbol, timeframe, realDataStatus]);

  /* depending on endpoint, historical data array is either directly in data or in
  data.historical */
  const chartData = formatChartData(
    filterChartData('historical' in data ? data.historical : data, timeframe)
  );

  if (error) return <FetchErrorContainer error='Failed to fetch chart data' />;

  return (
    <QuoteChart
      chartData={chartData}
      timeScaleFormat={getTimeScaleFormat(timeframe)}
      tooltipFormat={getTooltipFormat(timeframe)}
      setTimeframe={setTimeframe}
      loading={loading}
    />
  );
};

export default QuoteChartContainer;
