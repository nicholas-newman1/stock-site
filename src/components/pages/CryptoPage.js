import React from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../global/table/Table';
import BottomNews from '../global/bottomNews/BottomNews';
import { dummyCryptoData } from '../../dummyData';
import useFetch from '../../hooks/useFetch';

const CryptoPage = () => {
  const { data, setData, loading } = useFetch(
    [], // intial value
    'quotes/crypto', // endpoint
    dummyCryptoData // dummy data
  );

  return (
    <div>
      <Helmet>
        <title>Cryptocurrency Quotes | Finance App</title>
        <meta
          name='description'
          content='Free cryptocurrency quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <h1 className='page-heading'>Cryptocurrencies</h1>

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews />
    </div>
  );
};

export default CryptoPage;
