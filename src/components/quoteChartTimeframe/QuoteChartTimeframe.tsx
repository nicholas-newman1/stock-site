import React, { useEffect, useRef } from 'react';
import './quoteChartTimeframe.css';

const QuoteChartTimeframe = ({ setTimeframe }) => {
  const changeTimeframe = (e) => {
    // change disabled button to the one that was clicked
    [...e.target.parentNode.children].forEach((btn) => (btn.disabled = false));
    e.target.disabled = true;

    // set new timeframe
    setTimeframe(e.target.innerText);
  };

  const timeframeBtns = ['1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'MAX'];

  const timeframe = useRef<HTMLInputElement>();
  useEffect(() => {
    // disable first timeframe button on mount
    const firstBtn = timeframe.current.children[0] as HTMLButtonElement;
    firstBtn.disabled = true;
  }, []);

  return (
    <nav ref={timeframe} className='quote-timeframe'>
      {timeframeBtns.map((text, i) => (
        <button
          className='quote-timeframe__btn'
          onClick={changeTimeframe}
          key={i}
        >
          {text}
        </button>
      ))}
    </nav>
  );
};

export default QuoteChartTimeframe;
