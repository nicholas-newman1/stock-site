import React, { useState, createContext, useEffect } from 'react';
import { createChart } from 'lightweight-charts';
import { formatAMPM } from '../components/helpers';
import {
  dummyIntradayData,
  dummyFiveDayData,
  dummyOneMonthData,
  dummyDailyData,
} from '../components/dummyData';

export const ChartContext = createContext();

export const ChartProvider = (props) => {
  const [symbol, setSymbol] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [chart, setChart] = useState(null);
  const [lineSeries, setLineSeries] = useState(null);
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    // GET RID OF THE FOLLOWING LINE
    // let symbol = 'AAPL';
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

    console.log(url);

    // const res = await fetch(url);
    // let data = await res.json();

    // data for 6M timeframe and onwards returns an object with a "historical" property
    if (
      timeframe === '6M' ||
      timeframe === 'YTD' ||
      timeframe === '1Y' ||
      timeframe === '5Y' ||
      timeframe === 'MAX'
    ) {
      data = [...data.historical];
    } else {
      // Most recent price fetched from 'historical-chart' endpoint differs from most recent price fetched from 'historical-price-full' or 'quote' endpoints
      // Discrepency gets resolved by replacing last data point with the most recent price from the 'quote' endpoint
      // const res = await fetch(
      //   `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
      // );
      // const quote = await res.json();
      // data.unshift({
      //   date: data.shift().date,
      //   close: quote[0].price,
      // });
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
      return { time: timestamp, value: item.close.toFixed(2) };
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
          priceFormatter: (price) => '$' + price, // adds $ to price
        },
        priceScale: {
          scaleMargins: { bottom: 0.1, top: 0.3 }, // line will be relatively centered vertically
          borderColor: '#fff',
          entireTextOnly: true,
        },
        timeScale: {
          borderColor: '#fff',
          fixLeftEdge: true, // data starts from the left edge of the chart
          lockVisibleTimeRangeOnResize: true,
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
      })
    );
  };

  // once the chart has been created, add line series and resize observer
  useEffect(() => {
    if (chart) {
      // add line series to chart
      setLineSeries(chart.addLineSeries());

      // resize chart based on window width
      let resizer = new ResizeObserver((entries) => {
        let width = window.innerWidth;
        if (width <= 340) {
          chart.resize(230, 200);
        } else if (width <= 370) {
          chart.resize(250, 200);
        } else if (width <= 390) {
          chart.resize(280, 200);
        } else if (width <= 420) {
          chart.resize(300, 200);
        } else if (width <= 440) {
          chart.resize(330, 200);
        } else if (width < 520) {
          chart.resize(400, 300);
        } else if (width < 705) {
          chart.resize(475, 400);
        } else if (width < 830) {
          chart.resize(650, 400);
        } else if (width <= 1000) {
          chart.resize(768, 400);
        } else if (width < 1135) {
          chart.resize(505, 400);
        } else {
          chart.resize(650, 400);
        }
      });

      // observe html element for resize events
      resizer.observe(document.querySelector('html'));
    }
  }, [chart]);

  // once chart and lineSeries have been defined and chartData has been fetched, inject the data into the chart's lineSeries
  useEffect(() => {
    if (chart && lineSeries && chartData.length > 0) {
      lineSeries.setData(chartData); // inject data into chart
      chart.timeScale().fitContent(); // fit all data points on the chart
      let width = window.innerWidth;
      if (width <= 340) {
        chart.resize(230, 200);
      } else if (width <= 370) {
        chart.resize(250, 200);
      } else if (width <= 390) {
        chart.resize(280, 200);
      } else if (width <= 420) {
        chart.resize(300, 200);
      } else if (width <= 440) {
        chart.resize(330, 200);
      } else if (width < 520) {
        chart.resize(400, 300);
      } else if (width < 705) {
        chart.resize(475, 400);
      } else if (width < 830) {
        chart.resize(650, 400);
      } else if (width <= 1000) {
        chart.resize(768, 400);
      } else if (width < 1135) {
        chart.resize(505, 400);
      } else {
        chart.resize(650, 400);
      }
    }
  }, [chart, lineSeries, chartData]);

  // if the chart is created or the timeframe updates
  // fetch the data for that timeframe
  useEffect(() => {
    if (chart) {
      fetchData();
    }
    //eslint-disable-next-line
  }, [timeframe, chart]);

  // once data is fetched, update the chart options
  useEffect(() => {
    if (chart) {
      updateChartOptions();
    }
    //eslint-disable-next-line
  }, [chartData, chart]);

  return (
    <ChartContext.Provider
      value={{
        setSymbol,
        setTimeframe,
        initializeChart,
      }}
    >
      {props.children}
    </ChartContext.Provider>
  );
};
