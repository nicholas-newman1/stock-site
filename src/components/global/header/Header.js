import React, { useEffect, useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../searchBar/SearchBar';
import MainNav from '../mainNav/MainNav';
import HeaderWarning from './HeaderWarning';
import { DisplayNavContext } from '../../../context/DisplayNavContext';
import { RealDataContext } from '../../../context/RealDataContext';
import './header.css';

const Header = () => {
  const [isLargeView, setIsLargeView] = useState(false);
  const { displayNav, setDisplayNav } = useContext(DisplayNavContext);
  const { realData } = useContext(RealDataContext);

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

    const headerLogo = document.querySelector('.header__logo');
    const headerHamburger = document.querySelector('.header__hamburger');

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
    <header className='header'>
      {!realData && <HeaderWarning />}
      <div className='header__container container'>
        <Link className='header__logo' to='/'>
          Stock Site
        </Link>

        <div className='header__search-container'>
          <SearchBar />
        </div>

        <FontAwesomeIcon
          className='header__hamburger'
          icon={faBars}
          onClick={() => setDisplayNav(!displayNav)}
        />

        {(displayNav || isLargeView) && (
          <>
            <div className='header__watchlist-container'>
              <Link className='header__watchlist-link' to={`/watchlist`}>
                Watchlist
              </Link>
            </div>
            <div className='header__nav-container'>
              <MainNav />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
