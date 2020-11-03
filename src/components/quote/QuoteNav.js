import React from 'react';
import '../../css/quote/quoteNav.css';

const QuoteNav = ({ tab, setTab }) => {
  let navItems = ['Summary', 'Chart', 'Financials', 'Profile', 'Valuation'];
  return (
    <nav className='quote-nav-container'>
      <ul className='quote-nav-ul'>
        {navItems.map((item) => (
          <li key={item} className='quote-nav-li'>
            <button
              className={
                tab === item ? 'quote-nav-btn active' : 'quote-nav-btn inactive'
              }
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
