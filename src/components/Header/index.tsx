import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderWarning from '../HeaderWarning';
import MainNavItems from '../MainNavItems';
import Nav from '../Nav';
import SearchBar from '../SearchBar';
import './header.css';

interface Props {
  realData: boolean;
  mobileNav: boolean;
  hideMobileNav: () => void;
  toggleMobileNav: () => void;
}

const Header: React.FC<Props> = ({
  realData,
  mobileNav,
  hideMobileNav,
  toggleMobileNav,
}) => {
  useEffect(() => {
    const main = document.querySelector('main')!;
    const header = document.querySelector('header')!;
    const footer = document.querySelector('footer');

    // push main into view from under the header
    const headerResizer = new ResizeObserver(() => {
      main.style.paddingTop = `${header.getBoundingClientRect().height + 16}px`;
    });
    headerResizer.observe(header);

    // hide mobile nav when clicking anywhere other than header
    main.addEventListener('click', () => hideMobileNav());
    footer?.addEventListener('click', () => hideMobileNav());

    // shrink/grow header based on scroll direction (small screens only)
    const headerLogo = document.querySelector('.header__logo')!;
    const headerHamburger = document.querySelector('.header__hamburger')!;

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

    //eslint-disable-next-line
  }, []);

  return (
    <header className='header'>
      {!realData && <HeaderWarning />}
      <div className='header__container container'>
        <Link className='header__logo' to='/' onClick={() => hideMobileNav()}>
          Stock Site
        </Link>

        <div className='header__search-container'>
          <SearchBar path='/search' onSearch={() => hideMobileNav()} />
        </div>

        <FontAwesomeIcon
          className='header__hamburger'
          icon={faBars}
          onClick={() => toggleMobileNav()}
        />

        <div
          className={`header__watchlist-container ${
            mobileNav ? '' : 'header--hidden'
          }`}
        >
          <Link
            className='watchlist-btn'
            to={`/watchlist`}
            onClick={() => hideMobileNav()}
          >
            Watchlist
          </Link>
        </div>

        <div
          className={`header__nav-container ${
            mobileNav ? '' : 'header--hidden'
          }`}
        >
          <MainNavItems
            hideNav={() => hideMobileNav()}
            render={(navItems) => <Nav navItems={navItems} />}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
