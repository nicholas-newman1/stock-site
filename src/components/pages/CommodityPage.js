import React from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../global/table/Table';
import BottomNews from '../global/bottomNews/BottomNews';
import Heading from '../global/heading/Heading';
import { dummyCommodityData } from '../../dummyData';
import useFetch from '../../hooks/useFetch';

const CommodityPage = () => {
  const { data, setData, loading } = useFetch(
    [], // intial value
    'quotes/commodity', // endpoint
    dummyCommodityData // dummy data
  );

  return (
    <div>
      <Helmet>
        <title>Commodity Quotes | Finance App</title>
        <meta
          name='description'
          content='Free commodity quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Commodities' />

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews />
    </div>
  );
};

export default CommodityPage;
