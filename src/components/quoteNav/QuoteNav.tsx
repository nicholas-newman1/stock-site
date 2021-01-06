import React from 'react';
import './quoteNav.css';

interface Props {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const QuoteNav: React.FC<Props> = ({ tab, setTab }) => {
  let navItems = ['Summary', 'Chart', 'Financials', 'Profile', 'Valuation'];
  return (
    <nav className='quote-nav'>
      <ul className='quote-nav__ul'>
        {navItems.map((item) => (
          <li key={item} className='quote-nav__li'>
            <button
              className={`quote-nav__btn ${
                tab === item
                  ? 'quote-nav__btn--active'
                  : 'quote-nav__btn--inactive'
              }`}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default QuoteNav;
