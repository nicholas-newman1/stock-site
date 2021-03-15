import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../common/components/SearchBar';
import Nav from '../../common/components/Nav';
import './footer.css';
import { navItems } from '../navItems';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <Link className='footer__logo' to='/'>
          Stock Site
        </Link>

        <div className='footer__search-container'>
          <SearchBar path='/search' />
        </div>

        <div className='footer__nav-container'>
          <Nav navItems={navItems} />
        </div>

        <Link className='btn btn-outline-blue' to={`/watchlist`}>
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
