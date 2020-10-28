import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import RealDataToggle from './RealDataToggle';
import '../../css/header/header.css';
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
            <Link className='header-logo' to='/'>
              Finance App
            </Link>

            <Search />
            <Link className='header-watchlist-link' to={`/watchlist`}>
              Watchlist
            </Link>
          </div>
          <div className='header-bar-secondary'>
            <Nav />
            <RealDataToggle />
          </div>
        </div>

        <div className='mobile-header'>
          <div className='header-bar-primary'>
            <Link
              className='header-logo'
              to='/'
              onClick={() => setDisplayMobileMenu(false)}
            >
              Finance App
            </Link>
            <FontAwesomeIcon
              className='header-hamburger'
              icon={faBars}
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
            />
          </div>

          <div className='header-bar-secondary'>
            <Search />
            {displayMobileMenu && (
              <Link className='header-watchlist-link' to={`/watchlist`}>
                Watchlist
              </Link>
            )}
            {displayMobileMenu && <Nav />}
            <RealDataToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
