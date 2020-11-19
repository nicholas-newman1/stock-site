import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footerSearch.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
  const [text, setText] = useState('');

  return (
    <form
      className='footer-search-form'
      onSubmit={(e) => console.log('submit')}
    >
      <input
        className='footer-search-input'
        aria-label='search input'
        type='text'
        placeholder='Search...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={(e) => (e.target.style.border = '1px solid #777')}
        onBlur={(e) => (e.target.style.border = '1px solid #ddd')}
      />

      <Link
        className='footer-search-link'
        to={`/search/${text}`}
        onClick={(e) => {
          setText('');
          e.target.focus();
        }}
      >
        <button
          className='footer-search-btn'
          type='submit'
          aria-label='search button'
        >
          <FontAwesomeIcon className='footer-search-icon' icon={faSearch} />
        </button>
      </Link>
    </form>
  );
};

export default Search;
