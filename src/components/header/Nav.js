import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContext } from '../../context/HeaderContext';
import '../../css/header/nav.css';

const Nav = () => {
  const { setDisplayMobileMenu } = useContext(HeaderContext);

  const linkText = [
    'Home',
    'News',
    'Stocks',
    'Forex',
    'Cryptocurrencies',
    'Commodities',
  ];

  return (
    <ul className='nav-list'>
      {linkText.map((text, i) => (
        <li key={i} className='nav-item'>
          <Link
            className='nav-link'
            to={text === 'Home' ? '/' : text.toLowerCase()}
            onClick={() => setDisplayMobileMenu(false)}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
