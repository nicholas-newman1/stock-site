import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

const Nav = () => {
  return (
    <ul className='nav-list'>
      <li className='nav-item'>
        <Link className='nav-link' to='/'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/news'>
          News
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/stocks'>
          Stocks
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/forex'>
          Forex
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/cryptocurrencies'>
          Cryptocurrencies
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
