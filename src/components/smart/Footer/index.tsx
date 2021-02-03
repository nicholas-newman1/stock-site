import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDisplayMobileNav } from '../../../actions/displayMobileNavActions';
import SearchBar from '../../SearchBar';
import MainNavItems from '../../dumb/MainNavItems';
import Nav from '../../dumb/Nav';
import './footer.css';

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <Link className='footer__logo' to='/'>
          Stock Site
        </Link>

        <div className='footer__search-container'>
          <SearchBar />
        </div>

        <div className='footer__nav-container'>
          <MainNavItems
            hideNav={() => dispatch(setDisplayMobileNav(false))}
            render={(navItems) => <Nav navItems={navItems} />}
          />
        </div>

        <Link className='watchlist-btn' to={`/watchlist`}>
          Watchlist
        </Link>
      </div>
      <div className='footer__credits'>
        Website Developed By Nicholas Newman
      </div>
    </footer>
  );
};

export default Footer;
