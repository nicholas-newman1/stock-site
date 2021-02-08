import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './searchBar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { setDisplayMobileNav } from '../../actions/displayMobileNavActions';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <form className='search-bar'>
      <input
        className='search-bar__input'
        aria-label='search input'
        type='text'
        placeholder='Search...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={(e) => (e.target.style.border = '1px solid #777')}
        onBlur={(e) => (e.target.style.border = '1px solid #ddd')}
      />

      <Link
        className='search-bar__link'
        to={`/search/${text}`}
        onClick={(e) => {
          setText('');
          dispatch(setDisplayMobileNav(false));
          const el = e.target as HTMLAnchorElement;
          el.focus();
        }}
      >
        <button
          className='search-bar__btn'
          type='submit'
          aria-label='search button'
        >
          <FontAwesomeIcon className='search-bar__icon' icon={faSearch} />
        </button>
      </Link>
    </form>
  );
};

export default SearchBar;
