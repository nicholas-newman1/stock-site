import React, { useContext } from 'react';
import { CryptoContext } from '../../context/CryptoContext';
import '../../css/crypto/cryptoTableNav.css';

const CryptoTableNav = () => {
  const { cryptoData, page, setPage, resultsPerPage } = useContext(
    CryptoContext
  );

  const onLastPage = cryptoData.length - page * resultsPerPage > resultsPerPage;
  const onFirstPage = page !== 0;

  return (
    <div className='crypto-table-nav-container'>
      <button
        className='crypto-page-btn'
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={onFirstPage ? '' : 'disabled'}
      >
        {'< '}Prev Page
      </button>

      <button
        className='crypto-page-btn'
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={onLastPage ? '' : 'disabled'}
      >
        Next Page {' >'}
      </button>
    </div>
  );
};

export default CryptoTableNav;
