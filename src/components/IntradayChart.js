import React, { Component, createRef } from 'react';
import { createChart } from 'lightweight-charts';

class IntradayChart extends Component {
  constructor() {
    super();
    this.div = createRef();
    this.state = {
      chart: null,
      lineSeries: null,
    };
  }

  componentDidMount() {
    const formatAMPM = (timestamp) => {
      const date = new Date(timestamp);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    };

    const chart = createChart(this.div.current, {
      width: 400,
      height: 300,
      layout: {
        backgroundColor: '#333',
        textColor: '#fff',
        fontSize: 11,
        fontFamily: "'Trebuchet MS', Roboto, Ubuntu, sans-serif",
        border: '1px solid white',
      },
      localization: {
        timeFormatter: (time) => formatAMPM(time * 1000), // changes hover time to AM/PM
        priceFormatter: (price) => '$' + price, // adds $ to price
      },
      priceScale: {
        scaleMargins: { bottom: 0.35, top: 0.35 },
        borderColor: '#fff',
      },
      timeScale: {
        tickMarkFormatter: (time) => formatAMPM(time * 1000), // changes time ticks to AM/PM
        borderColor: '#fff',
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
    });

    const lineSeries = chart.addLineSeries();

    this.setState({ chart, lineSeries });
  }

  componentDidUpdate() {
    const { data } = this.props;

    if (data.length > 0) {
      const lineData = data.map((item) => {
        const timestamp = Date.parse(`${item.date} ${item.minute}`) / 1000; // converts date to UNIX timestamp
        return { time: timestamp, value: item.open };
      });

      const closeTimestamp = Date.parse(`${data[0].date} 16:00`) / 1000;

      const closeData = {
        time: closeTimestamp,
        value: data[data.length - 1].close,
      };

      lineData.push(closeData);

      this.state.lineSeries.setData(lineData);
      this.state.chart.timeScale().setVisibleRange({
        from: lineData[0].time,
        to: lineData[lineData.length - 1].time,
      });
    }
  }

  render() {
    return (
      <div ref={this.div}>
        <h1>{this.props.ticker}</h1>
      </div>
    );
  }
}

export default IntradayChart;
