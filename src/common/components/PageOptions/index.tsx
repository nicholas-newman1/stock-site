import React, { useEffect } from 'react';
import './pageOptions.css';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  resultsPerPage: number;
  setResultsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const PageOptions: React.FC<Props> = ({
  page,
  setPage,
  resultsPerPage,
  setResultsPerPage,
}) => {
  useEffect(() => {
    // Go to the first page upon changing the number of results per page
    if (page !== 0) setPage(0);
    //eslint-disable-next-line
  }, [resultsPerPage]);

  return (
    <div className='page-options'>
      <label className='page-options__label'>
        Results Per Page:
        <select
          className='page-options__select'
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

export default PageOptions;
