import React from 'react';
import '../../../css/global/table/tableNav.css';

const TableNav = ({ tableData, page, setPage, resultsPerPage }) => {
  const onLastPage = tableData.length - page * resultsPerPage <= resultsPerPage;
  const onFirstPage = page === 0;

  return tableData.length > resultsPerPage ? (
    <div className='table-nav-container'>
      <button
        className='table-btn'
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={onFirstPage ? 'disabled' : ''}
      >
        {'< '}Prev Page
      </button>

      <button
        className='table-btn'
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={onLastPage ? 'disabled' : ''}
      >
        Next Page {' >'}
      </button>
    </div>
  ) : null;
};

export default TableNav;
