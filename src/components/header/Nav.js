import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContext } from '../../context/HeaderContext';
import '../../css/nav.css';

const Nav = () => {
  const { setDisplayMobileMenu } = useContext(HeaderContext);
  return (
    <ul className='nav-list'>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/'
          onClick={() => setDisplayMobileMenu(false)}
        >
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/news'
          onClick={() => setDisplayMobileMenu(false)}
        >
          News
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/stocks'
          onClick={() => setDisplayMobileMenu(false)}
        >
          Stocks
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/forex'
          onClick={() => setDisplayMobileMenu(false)}
        >
          Forex
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          className='nav-link'
          to='/cryptocurrencies'
          onClick={() => setDisplayMobileMenu(false)}
        >
          Cryptocurrencies
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
