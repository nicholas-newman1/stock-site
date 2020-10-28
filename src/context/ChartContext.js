import React, { useState, createContext, useEffect, useContext } from 'react';
import { createChart } from 'lightweight-charts';
import { formatAMPM } from '../components/helpers';
import {
  dummyIntradayData,
  dummyFiveDayData,
  dummyOneMonthData,
  dummyDailyData,
} from '../components/dummyData';
import { RealDataContext } from './RealDataContext';
import { QuoteContext } from './QuoteContext';

export const ChartContext = createContext();

export const ChartProvider = (props) => {
  const [symbol, setSymbol] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [chart, setChart] = useState(null);
  const [lineSeries, setLineSeries] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [resizer, setResizer] = useState(null);
  const { realData } = useContext(RealDataContext);
  const { quote } = useContext(QuoteContext);

  const fetchData = async () => {
    let url;
    let data;
    if (timeframe === '1D') {
      url = `https://financialmodelingprep.com/api/v3/historical-chart/1min/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`;
      data = [...dummyIntradayData];
    } else if (timeframe === '5D') {
      url = `https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`;
      data = [...dummyFiveDayData];
    } else if (timeframe === '1M') {
      url = `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`;
      data = [...dummyOneMonthData];
    } else {
      url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line&apikey=${process.env.REACT_APP_FMP_KEY}`;
      data = dummyDailyData;
    }

    if (realData) {
      const res = await fetch(url);
      data = await res.json();
    }

    // data for 6M timeframe and onwards returns an object with a "historical" property
    if (
      timeframe === '6M' ||
      timeframe === 'YTD' ||
      timeframe === '1Y' ||
      timeframe === '5Y' ||
      timeframe === 'MAX'
    ) {
      data = [...data.historical];
    } else if (realData) {
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

    // format the data for lightweight-charts
    data = data.map((item) => {
      const timestamp = Date.parse(`${item.date}`) / 1000; // converts date to UNIX timestamp
      return {
        time: timestamp,
        value: item.close,
      };
    });
    // store the data in state
    setChartData(data);
  };

  // change how time is formatted based on timeframe
  const updateChartOptions = () => {
    if (timeframe === '1D') {
      chart.applyOptions({
        localization: {
          timeFormatter: (time) => formatAMPM(time * 1000),
        },
        timeScale: {
          tickMarkFormatter: (time) => formatAMPM(time * 1000),
        },
      });
    } else if (timeframe === '5D' || timeframe === '1M') {
      chart.applyOptions({
        localization: {
          timeFormatter: (time) => {
            let date = new Date(time * 1000);
            date = date.toLocaleDateString(undefined, {
              month: 'numeric',
              day: 'numeric',
            });
            time = formatAMPM(time * 1000);
            return `${date} ${time}`;
          },
        },
        timeScale: {
          tickMarkFormatter: (time) => {
            let date = new Date(time * 1000).toLocaleDateString(undefined, {
              month: 'numeric',
              day: 'numeric',
            });
            return date;
          },
        },
      });
    } else {
      chart.applyOptions({
        localization: {
          timeFormatter: (time) => {
            let date = new Date(time * 1000);
            date = date.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            });
            return date;
          },
        },
        timeScale: {
          tickMarkFormatter: (time) => {
            let date = new Date(time * 1000).toLocaleDateString(undefined, {
              month: 'numeric',
              year: 'numeric',
            });
            return date;
          },
        },
      });
    }
  };

  const initializeChart = (parentElement) => {
    //fetchData();
    setChart(
      // initially, pricescale and timescale will be formatted for intraday data
      createChart(parentElement, {
        width: 650,
        height: 400,
        layout: {
          backgroundColor: '#333',
          textColor: '#fff',
          fontSize: 11,
          fontFamily: "'Trebuchet MS', Roboto, Ubuntu, sans-serif",
          border: '1px solid white',
        },
        localization: {
          priceFormatter: (price) => '$' + price.toFixed(2), // adds $ to price
        },
        priceScale: {
          scaleMargins: { bottom: 0.1, top: 0.3 }, // line will be relatively centered vertically
          borderColor: '#fff',
          entireTextOnly: true,
        },
        timeScale: {
          borderColor: '#fff',
          fixLeftEdge: true, // data starts from the left edge of the chart
        },
        grid: {
          vertLines: {
            color: '#666',
          },
          horzLines: {
            color: '#666',
          },
        },
        handleScale: false, // no zooming in/out
        handleScroll: false, // no scrolling left/right
        horzTouchDrag: false,
        vertTouchDrag: false,
      })
    );
  };

  // once the chart has been created, add line series and resize observer
  useEffect(() => {
    if (chart) {
      // add line series to chart
      setLineSeries(chart.addLineSeries());

      // resize chart based on window width
      setResizer(
        new ResizeObserver(() => {
          if (window.innerWidth > 440) {
            //window.screen.width
            chart.resize(
              document.querySelector('.quote-page').clientWidth,
              400
            );
          } else {
            const containerWidth = document.querySelector('.quote-page')
              .clientWidth;
            const timeframeWidth = 57;
            chart.resize(containerWidth - timeframeWidth, 200);
          }
          chart.timeScale().fitContent(); // fit all data points on the chart
        })
      );
    }
  }, [chart]);

  useEffect(() => {
    // once resizer is set, observe html element for resize events
    if (resizer) resizer.observe(document.querySelector('html'));
  }, [resizer]);

  // once chart and lineSeries have been defined and chartData has been fetched, inject the data into the chart's lineSeries
  useEffect(() => {
    if (chart && lineSeries && chartData.length > 0) {
      lineSeries.setData(chartData); // inject data into chart
      chart.timeScale().fitContent(); // fit all data points on the chart
    }
  }, [chart, lineSeries, chartData]);

  // if the chart is created or the timeframe updates
  // fetch the data for that timeframe
  useEffect(() => {
    if (chart) {
      fetchData();
    }
    //eslint-disable-next-line
  }, [timeframe, chart, realData]);

  // once data is fetched, update the chart options
  useEffect(() => {
    if (chart) {
      updateChartOptions();
    }
    //eslint-disable-next-line
  }, [chartData]);

  useEffect(() => {
    // IS THIS CODE WORTH IT?
    // SMALL CHANGES LIKE FOR XRP HAVE INVISIBLE PRICE SCALE
    if (chart) {
      let { change } = quote;
      change = parseFloat(change);
      let decimals = 1;
      while (
        change !== 0 &&
        (change.toLocaleString(undefined, {
          maximumFractionDigits: decimals,
        }) === '0' ||
          change.toLocaleString(undefined, {
            maximumFractionDigits: decimals,
          }) === '-0')
      ) {
        decimals++;
      }
      decimals++;

      chart.applyOptions({
        localization: {
          priceFormatter: (price) => '$' + price.toFixed(decimals), // adds $ to price
        },
      });
    }
  }, [quote, chart]);

  return (
    <ChartContext.Provider
      value={{
        setSymbol,
        setTimeframe,
        initializeChart,
        resizer,
      }}
    >
      {props.children}
    </ChartContext.Provider>
  );
};
