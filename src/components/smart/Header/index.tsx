import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../reducers/rootReducer';
import {
  setDisplayMobileNav,
  toggleDisplayMobileNav,
} from '../../../actions/displayMobileNavActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../SearchBar';
import Nav from '../../dumb/Nav';
import HeaderWarning from '../../dumb/HeaderWarning';
import './header.css';
import MainNavItems from '../../dumb/MainNavItems';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const realData = useSelector((state: AppState) => state.realData);
  const [forceDisplayNav, setForceDisplayNav] = useState(false);
  const displayMobileNav = useSelector(
    (state: AppState) => state.displayMobileNav
  );

  useEffect(() => {
    const main = document.querySelector('main')!;
    const header = document.querySelector('header')!;

    // Hide/display nav depending on window size
    const resizer = new ResizeObserver(() => {
      window.innerWidth > 700
        ? setForceDisplayNav(true)
        : setForceDisplayNav(false);
    });
    resizer.observe(main);

    // margin top puts main into view from under the header
    const headerResizer = new ResizeObserver(() => {
      main.style.paddingTop = `${header.getBoundingClientRect().height + 16}px`;
    });
    headerResizer.observe(header);

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
  }, []);

  return (
    <header className='header'>
      {!realData.status && <HeaderWarning />}
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
          onClick={() => dispatch(toggleDisplayMobileNav())}
        />

        {(displayMobileNav || forceDisplayNav) && (
          <>
            <div className='header__watchlist-container'>
              <Link className='watchlist-btn' to={`/watchlist`}>
                Watchlist
              </Link>
            </div>
            <div className='header__nav-container'>
              <MainNavItems
                hideNav={() => dispatch(setDisplayMobileNav(false))}
                render={(navItems) => <Nav navItems={navItems} />}
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
