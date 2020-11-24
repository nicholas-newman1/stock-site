import React, { useEffect } from 'react';
import './quoteFinancialsNav.css';

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
      '.quote-financials-nav__statement-nav'
    ).firstChild.disabled = true;
    document.querySelector(
      '.quote-financials-nav__period-nav'
    ).firstChild.disabled = true;
  }, []);

  return (
    <div className='quote-financials-nav__container'>
      <nav className='quote-financials-nav__statement-nav'>
        <button
          className='quote-financials-nav__btn'
          onClick={(e) => {
            updateDisabled(e);
            setStatement('income-statement');
          }}
        >
          Income Statement
        </button>
        <button
          className='quote-financials-nav__btn'
          onClick={(e) => {
            updateDisabled(e);
            setStatement('balance-sheet-statement');
          }}
        >
          Balance Sheet
        </button>
        <button
          className='quote-financials-nav__btn'
          onClick={(e) => {
            updateDisabled(e);
            setStatement('cash-flow-statement');
          }}
        >
          Cash Flow
        </button>
      </nav>

      <nav className='quote-financials-nav__period-nav'>
        <button
          className='quote-financials-nav__btn'
          onClick={(e) => {
            updateDisabled(e);
            setPeriod('');
          }}
        >
          Annually
        </button>
        <button
          className='quote-financials-nav__btn'
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
