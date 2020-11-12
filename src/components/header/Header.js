import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import '../../css/header/header.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const main = document.querySelector('main');
    const header = document.querySelector('header');

    const resizer = new ResizeObserver(() => {
      main.style.paddingTop = `${header.getBoundingClientRect().height + 16}px`;
      if (window.innerWidth > 700) {
        setDisplayNav(true);
        setToggleNav(false);
      } else {
        setDisplayNav(false);
      }
    });
    resizer.observe(header);

    // shrink/grow header based on scroll direction
    let lastScroll = 0;
    const headerLogo = document.querySelector('.header-logo');
    const headerHamburger = document.querySelector('.header-hamburger');
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        headerLogo.classList.remove('scroll-up');
        return;
      }

      if (
        currentScroll > lastScroll &&
        !headerLogo.classList.contains('scroll-down')
      ) {
        headerLogo.classList.add('scroll-down');
        headerHamburger.classList.add('scroll-down');
      } else if (
        currentScroll < lastScroll &&
        headerLogo.classList.contains('scroll-down')
      ) {
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
          Finance App
        </Link>

        <div className='header-search-container'>
          <Search setToggleNav={setToggleNav} />
        </div>

        <FontAwesomeIcon
          className='header-hamburger'
          icon={faBars}
          onClick={() => setToggleNav(!toggleNav)}
        />

        {(toggleNav || displayNav) && (
          <>
            <div className='header-watchlist-container'>
              <Link className='header-watchlist-link' to={`/watchlist`}>
                Watchlist
              </Link>
            </div>
            <div className='header-nav-container'>
              <Nav setToggleNav={setToggleNav} />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
