import React from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../global/table/Table';
import BottomNews from '../global/bottomNews/BottomNews';
import { dummyCommodityData } from '../../dummyData';
import useFetchAndSet from '../../hooks/useFetchAndSet';

const CommodityPage = () => {
  const { data, setData, loading } = useFetchAndSet(
    [],
    'quotes/commodity',
    dummyCommodityData
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

      <h1 className='page-heading'>Commodities</h1>

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews />
    </div>
  );
};

export default CommodityPage;
