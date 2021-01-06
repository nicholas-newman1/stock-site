import React, { useEffect, useRef } from 'react';
import './quoteFinancialsNav.css';

interface Props {
  setStatement: React.Dispatch<React.SetStateAction<Statement>>;
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
}

const QuoteFinancialsNav: React.FC<Props> = ({ setStatement, setPeriod }) => {
  // sets the disabled button on click
  const updateDisabled = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btn = e.target as HTMLButtonElement;
    // set all button's disabled attribute to false
    const btns = Array.from(btn.parentNode!.children) as HTMLButtonElement[];
    btns.forEach((btn) => {
      btn.disabled = false;
    });
    // set the new button's disabled attribute to true
    btn.disabled = true;
  };

  const firstStatementBtn = useRef<HTMLButtonElement>(null);
  const firstPeriodBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // set disabled buttons on component mount
    firstStatementBtn.current!.disabled = true;
    firstPeriodBtn.current!.disabled = true;
  }, []);

  return (
    <div className='quote-financials-nav'>
      <nav className='quote-financials-nav__statement-nav'>
        <button
          ref={firstStatementBtn}
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
          ref={firstPeriodBtn}
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
