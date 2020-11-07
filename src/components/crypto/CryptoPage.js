import React, { useEffect, useContext } from 'react';
import CryptoTable from './CryptoTable';
import CryptoTableNav from './CryptoTableNav';
import CryptoTableOptions from './CryptoTableOptions';
import News from '../quote/news/QuoteNews';
import { CryptoContext } from '../../context/CryptoContext';
import Spinner from '../Spinner';
import '../../css/crypto/cryptoPage.css';

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
      <CryptoTableNav />
      <CryptoTableOptions />
      <CryptoTable />
      <div className='crypto-news-container'>
        <News symbol={''} />
      </div>
    </>
  ) : (
    <h2 className='crypto-no-data'>No Data Available</h2>
  );
};

export default CryptoPage;
