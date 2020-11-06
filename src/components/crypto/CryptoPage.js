import React, { useEffect, useState, useContext } from 'react';
import CryptoTable from './CryptoTable';
import CryptoTableNav from './CryptoTableNav';
import CryptoTableOptions from './CryptoTableOptions';
import { CryptoContext } from '../../context/CryptoContext';
import Spinner from '../Spinner';

const CryptoPage = () => {
  const { fetchCryptoData, cryptoData, loading } = useContext(CryptoContext);

  useEffect(() => {
    fetchCryptoData();
    //eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : cryptoData.length > 0 ? (
    <>
      <h1 className='crypto-heading'>Cryptocurrencies</h1>
      <CryptoTable />
      <CryptoTableNav />
      <CryptoTableOptions />
    </>
  ) : (
    <h2 className='crypto-no-data'>No Data Available</h2>
  );
};

export default CryptoPage;
