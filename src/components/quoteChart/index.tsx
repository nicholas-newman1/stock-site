import React, { useState } from 'react';
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
import BtnBarOne from '../dumb/BtnBarOne';

interface Props {
  symbol: string;
}

const QuoteChart: React.FC<Props> = ({ symbol }) => {
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

  const timeframeBtns = [
    { text: '1D' },
    { text: '5D' },
    { text: '1M' },
    { text: '6M' },
    { text: 'YTD' },
    { text: '1Y' },
    { text: '5Y' },
    { text: 'MAX' },
  ];

  return (
    <div className='quote-chart'>
      <BtnBarOne btns={timeframeBtns} setState={setTimeframe} />
      <HistoricalChart
        data={chartData}
        loading={loading}
        timeScaleFormat={getTimeScaleFormat(timeframe)}
        tooltipFormat={getTooltipFormat(timeframe)}
      />
    </div>
  );
};

export default QuoteChart;
