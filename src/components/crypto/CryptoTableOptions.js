import React, { useEffect, useContext } from 'react';
import { CryptoContext } from '../../context/CryptoContext';
import '../../css/crypto/cryptoTableOptions.css';

const CryptoTableOptions = () => {
  const { page, setPage, resultsPerPage, setResultsPerPage } = useContext(
    CryptoContext
  );

  useEffect(() => {
    if (page !== 0) setPage(0);
    //eslint-disable-next-line
  }, [resultsPerPage]);

  return (
    <div className='crypto-options-container'>
      <label className='crypto-options-label'>
        Results Per Page:
        <select
          className='crypto-select'
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

export default CryptoTableOptions;
