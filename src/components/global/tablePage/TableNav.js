import React, { useContext } from 'react';
import { TableContext } from '../../../context/TableContext';
import '../../../css/global/tablePage/tableNav.css';

const TableNav = () => {
  const { tableData, page, setPage, resultsPerPage } = useContext(TableContext);
  const onLastPage = tableData.length - page * resultsPerPage > resultsPerPage;
  const onFirstPage = page !== 0;
  return (
    <div className='table-nav-container'>
      <button
        className='table-btn'
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={onFirstPage ? '' : 'disabled'}
      >
        {'< '}Prev Page
      </button>

      <button
        className='table-btn'
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={onLastPage ? '' : 'disabled'}
      >
        Next Page {' >'}
      </button>
    </div>
  );
};

export default TableNav;
