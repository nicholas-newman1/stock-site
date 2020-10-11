import React, { useState, useEffect } from 'react';
import IntradayChart from './charts/IntradayChart';
import FiveDayChart from './charts/FiveDayChart';
import OneMonthChart from './charts/OneMonthChart';
import SixMonthChart from './charts/SixMonthChart';
import YTDChart from './charts/YTDChart';
import OneYearChart from './charts/OneYearChart';
import FiveYearChart from './charts/FiveYearChart';
import MaxChart from './charts/MaxChart';
import '../../css/quote/quoteChart.css';

const QuoteChart = ({ symbol }) => {
  const [timeframe, setTimeframe] = useState('1D');

  const changeTimeframe = (e) => {
    // change disabled button to the one that was clicked
    [...e.target.parentNode.children].forEach((btn) => (btn.disabled = false));
    e.target.disabled = true;

    // set new timeframe
    setTimeframe(e.target.innerText);
  };

  useEffect(() => {
    document.querySelector('.chart-timeframe').firstChild.disabled = true;
  }, []);

  return (
    <>
      {timeframe === '1D' && <IntradayChart symbol={symbol} />}
      {timeframe === '5D' && <FiveDayChart symbol={symbol} />}
      {timeframe === '1M' && <OneMonthChart symbol={symbol} />}
      {timeframe === '6M' && <SixMonthChart symbol={symbol} />}
      {timeframe === 'YTD' && <YTDChart symbol={symbol} />}
      {timeframe === '1Y' && <OneYearChart symbol={symbol} />}
      {timeframe === '5Y' && <FiveYearChart symbol={symbol} />}
      {timeframe === 'MAX' && <MaxChart symbol={symbol} />}

      <nav className='chart-timeframe'>
        <button className='chart-timeframe-btn' onClick={changeTimeframe}>
          1D
        </button>
        <button className='chart-timeframe-btn' onClick={changeTimeframe}>
          5D
        </button>
        <button className='chart-timeframe-btn' onClick={changeTimeframe}>
          1M
        </button>
        <button className='chart-timeframe-btn' onClick={changeTimeframe}>
          6M
        </button>
        <button className='chart-timeframe-btn' onClick={changeTimeframe}>
          YTD
        </button>
        <button className='chart-timeframe-btn' onClick={changeTimeframe}>
          1Y
        </button>
        <button className='chart-timeframe-btn' onClick={changeTimeframe}>
          5Y
        </button>
        <button className='chart-timeframe-btn' onClick={changeTimeframe}>
          MAX
        </button>
      </nav>
    </>
  );
};

export default QuoteChart;
