import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import '../../css/header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderContext } from '../../context/HeaderContext';

const Header = () => {
  const { displayMobileMenu, setDisplayMobileMenu } = useContext(HeaderContext);

  return (
    <header>
      <div className='container'>
        <div className='desktop-header'>
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

        <div className='mobile-header'>
          <div className='header-bar-primary'>
            <Link
              className='logo-link'
              to='/'
              onClick={() => setDisplayMobileMenu(false)}
            >
              <h1 className='logo-content'>Finance App</h1>
            </Link>
            <FontAwesomeIcon
              className='hamburger'
              icon={faBars}
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
            />
          </div>

          <div className='header-bar-secondary'>
            <Search />
            {displayMobileMenu && (
              <Link className='watchlist-link' to={`/watchlist`}>
                <button className='watchlist-btn'>Watchlist</button>
              </Link>
            )}
            {displayMobileMenu && <Nav />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
