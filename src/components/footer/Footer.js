import React from 'react';
import SearchBar from '../global/searchBar/SearchBar';
import MainNav from '../global/mainNav/MainNav';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container container'>
        <Link className='footer-logo' to='/'>
          Stock Site
        </Link>

        <div className='footer-search-container'>
          <SearchBar />
        </div>

        <MainNav justifyCenter={true} />
        <br />

        <Link className='footer-watchlist-link' to={`/watchlist`}>
          Watchlist
        </Link>
      </div>
      <div className='footer-credits'>Website Developed By Nicholas Newman</div>
    </footer>
  );
};

export default Footer;
