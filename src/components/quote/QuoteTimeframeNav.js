import React, { useEffect } from 'react';
import '../../css/quote/quoteTimeframeNav.css';

const QuoteTimeframeNav = ({ setTimeframe }) => {
  const changeTimeframe = (e) => {
    // change disabled button to the one that was clicked
    [...e.target.parentNode.children].forEach((btn) => (btn.disabled = false));
    e.target.disabled = true;

    // set new timeframe
    setTimeframe(e.target.innerText);
  };

  const timeframeBtns = ['1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'MAX'];

  useEffect(() => {
    document.querySelector('.timeframe').firstChild.disabled = true;
  }, []);

  return (
    <nav className='timeframe'>
      {timeframeBtns.map((text, i) => (
        <button className='timeframe-btn' onClick={changeTimeframe} key={i}>
          {text}
        </button>
      ))}
    </nav>
  );
};

export default QuoteTimeframeNav;
