import React, { useEffect } from 'react';
import '../../css/quote/quoteValuationNav.css';

const QuoteValuationNav = ({ setPeriod }) => {
  const updateDisabled = (e) => {
    // set all button's disabled attribute to false
    [...e.target.parentNode.children].forEach((btn) => {
      btn.disabled = false;
    });
    // set the new button's disabled attribute to true
    e.target.disabled = true;
  };

  useEffect(() => {
    // set disabled button on component mount
    document.querySelector('.valuation-nav').firstChild.disabled = true;
  }, []);

  return (
    <nav className='valuation-nav'>
      <button
        className='valuation-nav-btn'
        onClick={(e) => {
          updateDisabled(e);
          setPeriod('');
        }}
      >
        Annually
      </button>
      <button
        className='valuation-nav-btn'
        onClick={(e) => {
          updateDisabled(e);
          setPeriod('quarter');
        }}
      >
        Quarterly
      </button>
    </nav>
  );
};

export default QuoteValuationNav;
