import React from 'react';
import { Link } from 'react-router-dom';
import './footerNav.css';

const Nav = ({ setToggleNav }) => {
  const links = [
    'Home',
    'Indexes',
    'Stocks',
    'Forex',
    'Cryptocurrencies',
    'Commodities',
  ];

  return (
    <ul className='footer-nav-list'>
      {links.map((text, i) => (
        <li key={i} className='footer-nav-item'>
          <Link
            className='footer-nav-link'
            to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
            onClick={() => setToggleNav(false)}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
