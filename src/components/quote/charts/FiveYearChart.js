import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';
import { dummyDailyData } from '../../dummyData';

const QuoteChart = ({ symbol }) => {
  const [chart, setChart] = useState(null);
  const [lineSeries, setLineSeries] = useState(null);
  const [chartData, setChartData] = useState([]);

  const fetchDailyData = async () => {
    // const res = await fetch(
    //   `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line&apikey=${process.env.REACT_APP_FMP_KEY}`
    // );
    // let data = await res.json();
    // data = data.historical;

    let data = [...dummyDailyData.historical];
    // order data from earliest to latest
    data.reverse();

    // filter out any items that are from the previous day (intraday data should only include data from the last trading day)
    data = data.filter((item) => {
      const FiveYearsInMS = 1000 * 60 * 60 * 24 * 365 * 5;
      const latestDate = Date.parse(data[data.length - 1].date);
      const itemDate = Date.parse(item.date);
      return latestDate - itemDate < FiveYearsInMS;
    });

    data = data.map((item) => {
      const timestamp = Date.parse(`${item.date}`) / 1000; // converts date to UNIX timestamp
      return { time: timestamp, value: item.close };
    });

    setChartData(data);
  };

  // create chart and store in state
  useEffect(() => {
    setChart(
      createChart(document.getElementById('chart-container'), {
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
          timeFormatter: (time) => {
            let date = new Date(time * 1000);
            date = date.toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            });
            return date;
          },
          priceFormatter: (price) => '$' + price, // adds $ to price
        },
        priceScale: {
          scaleMargins: { bottom: 0.35, top: 0.35 }, // line will be relatively centered vertically
          borderColor: '#fff',
        },
        timeScale: {
          tickMarkFormatter: (time) => {
            let date = new Date(time * 1000).toLocaleDateString(undefined, {
              month: 'numeric',
              year: 'numeric',
            });
            return date;
          },
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
      })
    );
  }, []);

  // once chart is created, add lineSeries and store in state
  // also add resize observer
  useEffect(() => {
    if (chart) {
      // add lineSeries to chart and store in state
      setLineSeries(chart.addLineSeries());

      // resize chart on window resize
      let resizer = new ResizeObserver((entries) => {
        let width = window.innerWidth;
        if (width <= 345) {
          chart.resize(250, 200);
        } else if (width <= 370) {
          chart.resize(280, 200);
        } else if (width <= 420) {
          chart.resize(300, 200);
        } else if (width <= 470) {
          chart.resize(350, 200);
        } else if (width < 550) {
          chart.resize(400, 300);
        } else if (width < 735) {
          chart.resize(475, 400);
        } else if (width < 860) {
          chart.resize(650, 400);
        } else if (width <= 1000) {
          chart.resize(768, 400);
        } else if (width < 1135) {
          chart.resize(505, 400);
        } else {
          chart.resize(650, 400);
        }
        chart.timeScale().fitContent(); // must fit content after every resize
      });

      // observe html element for resize events
      resizer.observe(document.querySelector('html'));
    }
  }, [chart]);

  // once chart and lineSeries are in state, add data to the chart
  useEffect(() => {
    if (chart && lineSeries && chartData.length > 0) {
      lineSeries.setData(chartData); // inject data into chart
      chart.timeScale().fitContent(); // fit all data points on the chart
    }
  }, [chart, lineSeries, chartData]);

  useEffect(() => {
    fetchDailyData();
  }, []);

  return <div className='chart-container' id='chart-container'></div>;
};

export default QuoteChart;
