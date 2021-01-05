import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import MainNav from '../mainNav/MainNav';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <Link className='footer__logo' to='/'>
          Stock Site
        </Link>

        <div className='footer__search-container'>
          <SearchBar />
        </div>

        <MainNav justifyCenter={true} />
        <br />

        <Link className='footer__watchlist-link' to={`/watchlist`}>
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
