import React, { useEffect, useContext } from 'react';
import { ChartContext } from '../../context/ChartContext';
import '../../css/quote/quoteChart.css';

const QuoteChart = ({ symbol }) => {
  const { setSymbol, initializeChart, setTimeframe, resizer } = useContext(
    ChartContext
  );

  useEffect(() => {
    setSymbol(symbol);
    initializeChart(document.querySelector('#chart-container'));
    setTimeframe('1D');
    document.querySelector('.chart-timeframe').firstChild.disabled = true;
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    // unobserve width (for chart resizing) when component unmounts
    if (resizer) {
      return () => {
        resizer.unobserve(document.querySelector('html'));
      };
    }
  }, [resizer]);

  const changeTimeframe = (e) => {
    // change disabled button to the one that was clicked
    [...e.target.parentNode.children].forEach((btn) => (btn.disabled = false));
    e.target.disabled = true;

    // set new timeframe
    setTimeframe(e.target.innerText);
  };

  return (
    <div className='chart'>
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
      <div id='chart-container'></div>
    </div>
  );
};

export default QuoteChart;
