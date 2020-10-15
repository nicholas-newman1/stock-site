import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/quote/quoteNav.css';

const QuoteNav = ({ page }) => {
  const navItems = ['Summary', 'Chart', 'Financials'];
  return (
    <nav className='quote-nav-container'>
      <ul className='quote-nav-ul'>
        {navItems.map((item) => (
          <li key={item} className='quote-nav-li'>
            <Link
              className={
                page === item.toLowerCase()
                  ? 'quote-nav-link active'
                  : 'quote-nav-link'
              }
              to={item.toLowerCase()}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default QuoteNav;
