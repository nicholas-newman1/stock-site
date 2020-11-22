import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../global/searchBar/SearchBar';
import HeaderNav from './HeaderNav';
import './header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DisplayNavContext } from '../../context/DisplayNavContext';

const Header = () => {
  const [isLargeView, setIsLargeView] = useState(false);
  const { displayNav, setDisplayNav } = useContext(DisplayNavContext);

  useEffect(() => {
    const main = document.querySelector('main');
    const header = document.querySelector('header');

    // Hide/display nav part of header depending on window size
    const resizer = new ResizeObserver((e) => {
      // Move main down into view
      main.style.paddingTop = `${header.getBoundingClientRect().height + 16}px`;
      window.innerWidth > 700 ? setIsLargeView(true) : setIsLargeView(false);
    });
    resizer.observe(main);

    // shrink/grow header based on scroll direction

    const headerLogo = document.querySelector('.header-logo');
    const headerHamburger = document.querySelector('.header-hamburger');

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll) {
        headerLogo.classList.add('scroll-down');
        headerHamburger.classList.add('scroll-down');
      } else if (currentScroll < lastScroll) {
        headerLogo.classList.remove('scroll-down');
        headerHamburger.classList.remove('scroll-down');
      }
      lastScroll = currentScroll;
    });
  }, []);

  return (
    <header>
      <div className='header container'>
        <Link className='header-logo' to='/'>
          Stock Site
        </Link>

        <div className='header-search-container'>
          <SearchBar />
        </div>

        <FontAwesomeIcon
          className='header-hamburger'
          icon={faBars}
          onClick={() => setDisplayNav(!displayNav)}
        />

        {(displayNav || isLargeView) && (
          <>
            <div className='header-watchlist-container'>
              <Link className='header-watchlist-link' to={`/watchlist`}>
                Watchlist
              </Link>
            </div>
            <div className='header-nav-container'>
              <HeaderNav setDisplayNav={setDisplayNav} />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
