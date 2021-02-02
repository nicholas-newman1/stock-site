import React from 'react';
import BtnBarTwo from '../dumb/BtnBarTwo';
import './quoteNav.css';

interface Props {
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const QuoteNav: React.FC<Props> = ({ setTab }) => {
  let navItems = [
    { text: 'Summary' },
    { text: 'Financials' },
    { text: 'Profile' },
    { text: 'Valuation' },
  ];

  return (
    <div className='quote-nav'>
      <BtnBarTwo btns={navItems} setState={setTab} />
    </div>
  );
};

export default QuoteNav;
