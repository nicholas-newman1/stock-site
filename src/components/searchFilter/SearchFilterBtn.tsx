import React from 'react';

/* This component toggles the visiblity of the search filter */

interface Props {
  displayFilter: boolean;
  setDisplayFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchFilterBtn: React.FC<Props> = ({
  displayFilter,
  setDisplayFilter,
}) => {
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
