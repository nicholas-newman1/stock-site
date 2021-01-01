import React, { useEffect, useRef } from 'react';
import './quoteValuationNav.css';

const QuoteValuationNav = ({ setPeriod }) => {
  const updateDisabled = (e) => {
    // set all button's disabled attribute to false
    [...e.target.parentNode.children].forEach((btn) => {
      btn.disabled = false;
    });
    // set the new button's disabled attribute to true
    e.target.disabled = true;
  };

  const firstBtn = useRef<HTMLButtonElement>();
  useEffect(() => {
    // set disabled button on component mount
    firstBtn.current.disabled = true;
  }, []);

  return (
    <nav className='valuation-nav'>
      <button
        ref={firstBtn}
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
