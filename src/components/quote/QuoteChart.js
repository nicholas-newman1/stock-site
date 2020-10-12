import React, { useEffect, useContext } from 'react';
import { ChartContext } from '../../context/ChartContext';
import '../../css/quote/quoteChart.css';

const QuoteChart = ({ symbol }) => {
  const { setSymbol, initializeChart, setTimeframe } = useContext(ChartContext);

  const changeTimeframe = (e) => {
    // change disabled button to the one that was clicked
    [...e.target.parentNode.children].forEach((btn) => (btn.disabled = false));
    e.target.disabled = true;

    // set new timeframe
    setTimeframe(e.target.innerText);
  };

  useEffect(() => {
    setSymbol(symbol);
    initializeChart(document.querySelector('#chart-container'));
    setTimeframe('1D');
    document.querySelector('.chart-timeframe').firstChild.disabled = true;
    //eslint-disable-next-line
  }, []);

  return (
    <div className='chart'>
      <div id='chart-container'></div>

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
    </div>
  );
};

export default QuoteChart;
