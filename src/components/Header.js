import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import '../css/header.css';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-bar-primary'>
          <Link className='logo-link' to='/'>
            <h1 className='logo-content'>Finance App</h1>
          </Link>
          <Search />
          <Link className='watchlist-link' to={`/watchlist`}>
            <button className='watchlist-btn' type='submit'>
              Watchlist
            </button>
          </Link>
        </div>
        <div className='header-bar-secondary'>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
