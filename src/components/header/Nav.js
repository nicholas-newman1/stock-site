import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/header/nav.css';

const Nav = ({ setToggleNav }) => {
  const links = ['Home', 'Stocks', 'Forex', 'Cryptocurrencies', 'Commodities'];

  return (
    <ul className='nav-list'>
      {links.map((text, i) => (
        <li key={i} className='nav-item'>
          <Link
            className='nav-link'
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
