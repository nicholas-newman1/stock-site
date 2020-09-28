import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/search.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderContext } from '../context/HeaderContext';

const Search = () => {
  const { text, setText, setDisplayMobileMenu } = useContext(HeaderContext);

  return (
    <form className='search-form'>
      <input
        className='search-input'
        aria-label='search input'
        type='text'
        placeholder='Search...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={(e) => (e.target.style.border = '1px solid #777')}
        onBlur={(e) => (e.target.style.border = '1px solid #ddd')}
      />

      <Link
        className='search-link'
        to={`/search/${text}`}
        onClick={() => {
          setText('');
          setDisplayMobileMenu(false);
        }}
      >
        <button className='search-btn' type='submit' aria-label='search button'>
          <FontAwesomeIcon className='search-icon' icon={faSearch} />
        </button>
      </Link>
    </form>
  );
};

export default Search;
