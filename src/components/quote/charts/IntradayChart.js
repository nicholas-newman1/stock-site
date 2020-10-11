import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';
import { formatAMPM } from '../../helpers';
import { dummyIntradayData } from '../../dummyData';

const QuoteChart = ({ symbol }) => {
  const [chart, setChart] = useState(null);
  const [lineSeries, setLineSeries] = useState(null);
  const [chartData, setChartData] = useState([]);

  const fetchIntradayData = async () => {
    // const res = await fetch(
    //   `https://financialmodelingprep.com/api/v3/historical-chart/1min/${symbol}?apikey=${process.env.REACT_APP_FMP_KEY}`
    // );
    // let data = await res.json();

    let data = [...dummyIntradayData];
    // order data from earliest to latest
    data.reverse();

    // filter out any items that are from the previous day (intraday data should only include data from the last trading day)
    data = data.filter((item) => {
      const latestDate = new Date(
        data[data.length - 1].date
      ).toLocaleDateString();
      const itemDate = new Date(item.date).toLocaleDateString();
      return latestDate === itemDate;
    });

    data = data.map((item) => {
      const timestamp = Date.parse(`${item.date}`) / 1000; // converts date to UNIX timestamp
      return { time: timestamp, value: item.close };
    });

    setChartData(data);
  };

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
          timeFormatter: (time) => formatAMPM(time * 1000),
          priceFormatter: (price) => '$' + price, // adds $ to price
        },
        priceScale: {
          scaleMargins: { bottom: 0.35, top: 0.35 }, // line will be relatively centered vertically
          borderColor: '#fff',
        },
        timeScale: {
          tickMarkFormatter: (time) => formatAMPM(time * 1000),
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

  useEffect(() => {
    if (chart) {
      setLineSeries(chart.addLineSeries());

      // resize chart based on window width
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

  useEffect(() => {
    if (chart && lineSeries && chartData.length > 0) {
      lineSeries.setData(chartData); // inject data into chart
      chart.timeScale().fitContent(); // fit all data points on the chart
    }
  }, [chart, lineSeries, chartData]);

  useEffect(() => {
    fetchIntradayData();
  }, []);

  return <div className='chart-container' id='chart-container'></div>;
};

export default QuoteChart;
