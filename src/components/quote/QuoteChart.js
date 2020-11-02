import React, { useState, useEffect, useContext } from 'react';
import { Scatter } from 'react-chartjs-2';
import QuoteTimeframeNav from './QuoteTimeframeNav';
import '../../css/quote/quoteChart.css';
import {
  dummyIntradayData,
  dummyFiveDayData,
  dummyOneMonthData,
  dummyDailyData,
} from '../dummyData';
import { RealDataContext } from '../../context/RealDataContext';
import Spinner from '../Spinner';

const QuoteChart = ({ symbol }) => {
  const [loading, setLoading] = useState(false);
  const [dataAvailable, setDataAvailable] = useState(true);
  const [timeframe, setTimeframe] = useState('1D');
  const [chartData, setChartData] = useState([]);
  const [unit, setUnit] = useState('minute');
  const { realData } = useContext(RealDataContext);

  useEffect(() => {
    if (timeframe === '1D') setUnit('minute');
    if (timeframe === '5D' || timeframe === '1M') setUnit('day');
    if (timeframe === '6M' || timeframe === 'YTD' || timeframe === '1Y')
      setUnit('month');
    if (timeframe === '5Y' || timeframe === 'MAX') setUnit('month');
  }, [timeframe]);

  const fetchData = async () => {
    let data;

    if (realData) {
      setLoading(true);
      let interval = '';
      let endpoint = 'historical-chart';
      if (timeframe === '1D') interval = '1min';
      if (timeframe === '5D') interval = '5min';
      if (timeframe === '1M') interval = '1hour';
      if (interval === '') endpoint = 'historical-price-full'; // interval === '' equivalent to timeframe === 6M or YTD or 1Y or 5Y or MAX
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/${endpoint}/${interval}/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
      if (endpoint === 'historical-price-full') data = [...data.historical]; // data from 'historical-price-full endpoint returns an object with a 'historical' property
      setLoading(false);
    } else {
      data = dummyDailyData; // acts as an else for the following if statements
      if (timeframe === '1D') data = [...dummyIntradayData];
      if (timeframe === '5D') data = [...dummyFiveDayData];
      if (timeframe === '1M') data = [...dummyOneMonthData];
    }

    // exit the function if no chart data is available
    if (!data.length > 0) {
      setDataAvailable(false);
      return;
    } else {
      setDataAvailable(true);
    }

    if (
      (timeframe === '1D' || timeframe === '5D' || timeframe === '1M') &&
      realData
    ) {
      // Most recent price fetched from 'historical-chart' endpoint differs from most recent price fetched from 'quote' endpoint
      // Resolved by replacing last data point with the most recent price from the 'quote' endpoint
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      const quote = await res.json();
      data.unshift({
        date: data.shift().date,
        close: quote[0].price,
      });
    }

    // data returned from API is backwards
    data.reverse();

    // filter out data that is not within the timeframe
    if (timeframe === '1D') {
      data = data.filter((item) => {
        const latestDate = new Date(
          data[data.length - 1].date
        ).toLocaleDateString();
        const itemDate = new Date(item.date).toLocaleDateString();
        return latestDate === itemDate;
      });
    } else if (timeframe === '5D') {
      data = data.filter((item) => {
        const fiveDaysInMS = 1000 * 60 * 60 * 24 * 5;
        const latestDate = Date.parse(data[data.length - 1].date);
        const itemDate = Date.parse(item.date);
        return latestDate - itemDate < fiveDaysInMS;
      });
    } else if (timeframe === '1M') {
      data = data.filter((item) => {
        const thirtyDaysInMS = 1000 * 60 * 60 * 24 * 30;
        const latestDate = Date.parse(data[data.length - 1].date);
        const itemDate = Date.parse(item.date);
        return latestDate - itemDate < thirtyDaysInMS;
      });
    } else if (timeframe === '6M') {
      data = data.filter((item) => {
        const sixMonthsInMS = 1000 * 60 * 60 * 24 * 30 * 6;
        const latestDate = Date.parse(data[data.length - 1].date);
        const itemDate = Date.parse(item.date);
        return latestDate - itemDate < sixMonthsInMS;
      });
    } else if (timeframe === 'YTD') {
      data = data.filter((item) => {
        const yearBeginning = Date.parse(
          new Date(new Date().getFullYear().toString())
        );
        const itemDate = Date.parse(item.date);
        return itemDate > yearBeginning;
      });
    } else if (timeframe === '1Y') {
      data = data.filter((item) => {
        const oneYearInMS = 1000 * 60 * 60 * 24 * 365;
        const latestDate = Date.parse(data[data.length - 1].date);
        const itemDate = Date.parse(item.date);
        return latestDate - itemDate < oneYearInMS;
      });
    } else if (timeframe === '5Y') {
      data = data.filter((item) => {
        const fiveYearsInMS = 1000 * 60 * 60 * 24 * 365 * 5;
        const latestDate = Date.parse(data[data.length - 1].date);
        const itemDate = Date.parse(item.date);
        return latestDate - itemDate < fiveYearsInMS;
      });
    } else if (timeframe === 'MAX') {
      while (data.length > 1000) {
        //eslint-disable-next-line
        data = data.filter((item, i) => {
          return i % 2 === 1 || i === data.length - 1;
        });
      }
    }

    // format the data for chartjs
    data = data.map((item) => {
      return {
        x: new Date(item.date),
        y: item.close,
      };
    });
    // store the data in state
    setChartData(data);
  };

  useEffect(() => {
    fetchData();
  }, [timeframe, realData]);

  const options = {
    maintainAspectRatio: false,
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
            // dynamic display format
            unit,
            stepSize: 10,
          },
          ticks: {
            maxTicksLimit: 3,
            maxRotation: 0,
            minRotation: 0,
            autoSkipPadding: 100,
          },
        },
      ],
      yAxes: [{ ticks: {} }],
    },
    // hide points
    elements: { point: { radius: 0 } },
    // show closest point on hover
    hover: { mode: 'index', intersect: false },
    tooltips: { mode: 'index', intersect: false },
    legend: { display: false },
  };

  const dataset1 = {
    data: chartData,
    showLine: true,
    pointHoverBackgroundColor: 'rgba(0, 105, 196, 0.7)',
    pointHoverBorderColor: 'rgba(0, 105, 196, 0.7)',
    borderColor: 'rgba(0,0,0,0)',
    backgroundColor: 'rgba(0, 105, 196, 0.5)',
  };

  return (
    <div className='chart'>
      <QuoteTimeframeNav setTimeframe={setTimeframe} />
      {loading ? (
        <Spinner />
      ) : dataAvailable ? (
        <div className='chart-container'>
          <Scatter
            data={{ datasets: [dataset1] }}
            options={options}
            height={400}
          />
        </div>
      ) : (
        <h3>No Data Available</h3>
      )}
    </div>
  );
};

export default QuoteChart;
