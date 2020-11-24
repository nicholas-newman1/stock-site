import React, { useEffect } from 'react';
import './tableOptions.css';

const TableOptions = ({ page, setPage, resultsPerPage, setResultsPerPage }) => {
  useEffect(() => {
    if (page !== 0) setPage(0);
    //eslint-disable-next-line
  }, [resultsPerPage]);

  return (
    <div className='table__options-container'>
      <label className='table__options-label'>
        Results Per Page:
        <select
          className='table__select'
          value={resultsPerPage}
          onChange={(e) => setResultsPerPage(parseInt(e.target.value))}
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
      </label>
    </div>
  );
};

export default TableOptions;
