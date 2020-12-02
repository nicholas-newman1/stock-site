import React from 'react';

/* This component toggles the visiblity of the search filter */

const SearchFilterBtn = ({ displayFilter, setDisplayFilter }) => {
  return (
    <button
      className='search-filter__toggle search-filter__btn'
      onClick={() => setDisplayFilter((prev) => !prev)}
    >
      {displayFilter ? 'Hide Filter' : 'Filter Results'}
    </button>
  );
};

export default SearchFilterBtn;
