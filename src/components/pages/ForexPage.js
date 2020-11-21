import React from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../global/table/Table';
import BottomNews from '../global/bottomNews/BottomNews';
import { dummyForexData } from '../../dummyData';
import useFetch from '../../hooks/useFetch';

const ForexPage = () => {
  const { data, setData, loading } = useFetch(
    [], // intial value
    'quotes/forex', // endpoint
    dummyForexData // dummy data
  );

  return (
    <div>
      <Helmet>
        <title>Forex Quotes | Finance App</title>
        <meta
          name='description'
          content='Free forex quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <h1 className='page-heading'>Forex</h1>

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews />
    </div>
  );
};

export default ForexPage;
