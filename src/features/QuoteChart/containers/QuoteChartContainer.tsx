import React, { useState } from 'react';
import QuoteChart from '../components/QuoteChart';
import {
  getEndpoint,
  getDummyData,
  getTimeScaleFormat,
  getTooltipFormat,
} from '../helpers';
import useFetch from '../../../common/hooks/useFetch';
import {
  formatChartData,
  filterChartData,
} from '../../../common/utils/helpers';

interface Props {
  symbol: string;
}

const QuoteChartContainer: React.FC<Props> = ({ symbol }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>('1D');

  // fetch data
  const { data, loading } = useFetch(
    [],
    getEndpoint(symbol, timeframe),
    getDummyData(timeframe),
    '',
    [timeframe]
  );

  /* depending on endpoint, historical data array is either directly in data or in
  data.historical */
  const chartData = formatChartData(
    filterChartData(
      data.hasOwnProperty('historical') ? data.historical : data,
      timeframe
    )
  );

  return (
    <QuoteChart
      chartData={chartData}
      loading={loading}
      timeScaleFormat={getTimeScaleFormat(timeframe)}
      tooltipFormat={getTooltipFormat(timeframe)}
      setTimeframe={setTimeframe}
    />
  );
};

export default QuoteChartContainer;
