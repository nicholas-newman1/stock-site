import React, { useEffect } from 'react';
import '../../../css/quote/quoteFinancialsNav.css';

const QuoteFinancialsNav = ({ setStatement, setPeriod }) => {
  // sets the disabled button on click
  const updateDisabled = (e) => {
    // set all button's disabled attribute to false
    [...e.target.parentNode.children].forEach((btn) => {
      btn.disabled = false;
    });
    // set the new button's disabled attribute to true
    e.target.disabled = true;
  };

  useEffect(() => {
    // set disabled buttons on component mount
    document.querySelector(
      '.financials-statement-nav'
    ).firstChild.disabled = true;
    document.querySelector('.financials-period-nav').firstChild.disabled = true;
  }, []);

  return (
    <div className='financials-nav-container'>
      <nav className='financials-statement-nav'>
        <button
          className='financials-nav-btn'
          onClick={(e) => {
            updateDisabled(e);
            setStatement('income-statement');
          }}
        >
          Income Statement
        </button>
        <button
          className='financials-nav-btn'
          onClick={(e) => {
            updateDisabled(e);
            setStatement('balance-sheet-statement');
          }}
        >
          Balance Sheet
        </button>
        <button
          className='financials-nav-btn'
          onClick={(e) => {
            updateDisabled(e);
            setStatement('cash-flow-statement');
          }}
        >
          Cash Flow
        </button>
      </nav>

      <nav className='financials-period-nav'>
        <button
          className='financials-nav-btn'
          onClick={(e) => {
            updateDisabled(e);
            setPeriod('');
          }}
        >
          Annually
        </button>
        <button
          className='financials-nav-btn'
          onClick={(e) => {
            updateDisabled(e);
            setPeriod('quarter');
          }}
        >
          Quarterly
        </button>
      </nav>
    </div>
  );
};

export default QuoteFinancialsNav;
