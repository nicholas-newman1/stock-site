import React, { useState } from 'react';
import QuoteTimeframeNav from '../QuoteChartTimeframe';
import useFetch from '../../hooks/useFetch';
import HistoricalChart from '../dumb/HistoricalChart';
import {
  getDummyData,
  getEndpoint,
  getTimeScaleFormat,
  getTooltipFormat,
} from './helpers';
import './quoteChart.css';
import { filterChartData, formatChartData } from '../../helpers';

interface Props {
  symbol: string;
}

const QuoteChart: React.FC<Props> = ({ symbol }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>('1D');

  const timeScaleFormat = getTimeScaleFormat(timeframe);
  const tooltipFormat = getTooltipFormat(timeframe);
  const endpoint = getEndpoint(symbol, timeframe);
  const dummyData = getDummyData(timeframe);

  // fetch data
  const { data, loading } = useFetch([], endpoint, dummyData, '', [timeframe]);

  /* depending on endpoint, historical data array is either directly in data or in
  data.historical */
  const chartData = formatChartData(
    filterChartData(
      data.hasOwnProperty('historical') ? data.historical : data,
      timeframe
    )
  );

  return (
    <div className='quote-chart'>
      <QuoteTimeframeNav setTimeframe={setTimeframe} />
      <HistoricalChart
        data={chartData}
        loading={loading}
        timeScaleFormat={timeScaleFormat}
        tooltipFormat={tooltipFormat}
      />
    </div>
  );
};

export default QuoteChart;
