import React, { useEffect, useRef } from 'react';
import './quoteValuationNav.css';

interface Props {
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
}

const QuoteValuationNav: React.FC<Props> = ({ setPeriod }) => {
  const updateDisabled = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // set all button's disabled attribute to false
    const btn = e.target as HTMLButtonElement;
    const btns = Array.from(btn.parentElement!.children) as HTMLButtonElement[];
    btns.forEach((btn) => {
      btn.disabled = false;
    });
    // set the new button's disabled attribute to true
    btn.disabled = true;
  };

  const firstBtn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // set disabled button on component mount
    firstBtn.current!.disabled = true;
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
