import React, { useEffect, useContext } from 'react';
import { TableContext } from '../../../context/TableContext';
import '../../../css/global/tablePage/tableOptions.css';

const TableOptions = () => {
  const { page, setPage, resultsPerPage, setResultsPerPage, path } = useContext(
    TableContext
  );

  useEffect(() => {
    if (page !== 0) setPage(0);
    //eslint-disable-next-line
  }, [resultsPerPage, path]);

  return (
    <div className='table-options-container'>
      <label className='table-options-label'>
        Results Per Page:
        <select
          className='table-select'
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
