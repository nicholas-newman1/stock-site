import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../SearchBar';
import MainNav from '../../dumb/MainNav';
import './footer.css';

interface Props {
  links: string[];
}

const Footer: React.FC<Props> = ({ links }) => {
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
          <MainNav links={links} />
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
