import React from 'react';
import './searchNav.css';

const searchResultsNav = ({ searchResults, page, setPage, resultsPerPage }) => {
  const onLastPage =
    searchResults.length - page * resultsPerPage <= resultsPerPage;
  const onFirstPage = page === 0;

  return (
    <div className='results-page-btns'>
      <button
        className='results-page-btn'
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={onFirstPage ? 'disabled' : ''}
      >
        {'< '}Prev Page
      </button>

      <button
        className='results-page-btn'
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={onLastPage ? 'disabled' : ''}
      >
        Next Page{' >'}
      </button>
    </div>
  );
};

export default searchResultsNav;
