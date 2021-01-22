import React, { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import QuoteTimeframeNav from '../quoteChartTimeframe/QuoteChartTimeframe';
import './quoteChart.css';
import {
  dummyIntradayData,
  dummyFiveDayData,
  dummyOneMonthData,
  dummyDailyData,
} from '../../dummyData';
import Spinner from '../Spinner';
import { filterChartData, formatChartData } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import useChartFormat from '../../hooks/useChartFormat';

interface Props {
  symbol: string;
}

const QuoteChart: React.FC<Props> = ({ symbol }) => {
  const [timeframe, setTimeframe] = useState<Timeframe>('1D');
  const [chartData, setChartData] = useState<FormattedHistoricalPrices>([]);
  const [timeScaleFormat, tooltipFormat] = useChartFormat(timeframe);

  /* depending on how far back data needs to be fetched (in terms of date), the
  API requires either 'historical-chart' endpoint or 'historical-price-full'
  endpoint */
  let interval = '';
  let endpoint = 'historical-chart';
  if (timeframe === '1D') interval = '1min';
  if (timeframe === '5D') interval = '5min';
  if (timeframe === '1M') interval = '1hour';

  if (
    interval === 'YTD' ||
    interval === '1Y' ||
    interval === '5Y' ||
    interval === 'MAX'
  ) {
    endpoint = 'historical-price-full';
  }

  endpoint = `${endpoint}/${interval}/${symbol}`;

  // determine dummy data
  let dummyData;
  dummyData = dummyDailyData.historical; // functions as 'else' statement
  if (timeframe === '1D') dummyData = dummyIntradayData;
  if (timeframe === '5D') dummyData = dummyFiveDayData;
  if (timeframe === '1M') dummyData = dummyOneMonthData;

  /* depending on how far back data needs to be fetched (in terms of date), the
  API returns either an array with the data or an object with the property
  'historical', an array that contains the data. I destructure both and determine
  which one to use in the following useEffect. */
  const {
    data,
    data: { historical },
    loading,
  } = useFetch([], endpoint, dummyData, '', [timeframe]);

  useEffect(() => {
    /* formats data to be more readable. If historical array exists, use it.
    (see explanation in above comments) */
    setChartData(
      formatChartData(
        filterChartData(historical ? historical : data, timeframe)
      )
    );
    // eslint-disable-next-line
  }, [data]);

  // set up chartJS options. Visit chartJS documentation to understand them.
  const options = {
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          type: 'time',
          distribution: 'series',
          time: {
            // add a custom display format
            displayFormats: {
              dayAndTime: 'MMM D h:mm: a',
            },
            unit: timeScaleFormat,
            stepSize: 10,
            tooltipFormat,
          },
          ticks: {
            maxTicksLimit: 3,
            maxRotation: 0,
            minRotation: 0,
            autoSkipPadding: 100,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            callback: (value: string) => `$${value}`,
          },
        },
      ],
    },
    elements: { point: { radius: 0 } },
    hover: { mode: 'index', intersect: false }, // show closest point on hover
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: ({ xLabel, yLabel }: { xLabel: string; yLabel: number }) => {
          return `${xLabel} | $${yLabel.toFixed(2)}`;
        },
      },
    },
    legend: { display: false },
  };

  const dataset1 = {
    data: chartData,
    lineTension: 0,
    showLine: true,
    pointHoverBackgroundColor: 'rgba(0, 105, 196, 0.7)',
    pointHoverBorderColor: 'rgba(0, 105, 196, 0.7)',
    borderColor: 'rgba(0, 105, 196, 0.7)',
    fill: false,
  };

  return (
    <div className='quote-chart'>
      <QuoteTimeframeNav setTimeframe={setTimeframe} />
      {loading ? (
        <Spinner />
      ) : chartData.length > 0 ? (
        <div className='quote-chart__container'>
          <Scatter data={{ datasets: [dataset1] }} options={options} />
        </div>
      ) : (
        <h3>No Data Available</h3>
      )}
    </div>
  );
};

export default QuoteChart;
