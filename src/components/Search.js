import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/search.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchContext } from '../context/SearchContext';

const Search = () => {
  const { text, setText } = useContext(SearchContext);

  return (
    <form className='search-form'>
      <input
        className='search-input'
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
        onClick={() => setText('')}
      >
        <button className='search-btn' type='submit'>
          <FontAwesomeIcon className='search-icon' icon={faSearch} />
        </button>
      </Link>
    </form>
  );
};

export default Search;
