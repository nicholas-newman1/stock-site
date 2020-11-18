import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = ({ setToggleNav }) => {
  const [text, setText] = useState('');

  return (
    <form className='search-form' onSubmit={(e) => console.log('submit')}>
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
        onClick={(e) => {
          setText('');
          setToggleNav(false);
          e.target.focus();
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
