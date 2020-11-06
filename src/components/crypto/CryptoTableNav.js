import React, { useEffect, useContext } from 'react';
import { CryptoContext } from '../../context/CryptoContext';

const CryptoTableNav = () => {
  const {
    cryptoData,
    page,
    setPage,
    resultsPerPage,
    pageBtns,
    setPageBtns,
  } = useContext(CryptoContext);

  useEffect(() => {
    const numOfPages = Math.ceil(cryptoData.length / resultsPerPage);
    const pageBtns = [];
    for (let i = 0; i < numOfPages; i++) {
      pageBtns.push(
        <button
          key={i}
          className='crypto-page-btn'
          onClick={() => setPage(i)}
          disabled={i === page ? 'disabled' : ''}
        >
          {i + 1}
        </button>
      );
    }
    setPageBtns(pageBtns);
  }, [cryptoData, page, resultsPerPage]);

  const onLastPage = cryptoData.length - page * resultsPerPage > resultsPerPage;
  const onFirstPage = page !== 0;

  return (
    <>
      <button
        className='crypto-page-btn'
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={onFirstPage ? '' : 'disabled'}
      >
        Prev Page
      </button>

      {pageBtns}

      <button
        className='crypto-page-btn'
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={onLastPage ? '' : 'disabled'}
      >
        Next Page
      </button>
    </>
  );
};

export default CryptoTableNav;
