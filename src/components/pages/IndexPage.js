import React from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../global/table/Table';
import BottomNews from '../global/bottomNews/BottomNews';
import { dummyIndexPageData } from '../../dummyData';
import useFetchAndSet from '../../hooks/useFetchAndSet';

const IndexPage = () => {
  const [data, setData, loading] = useFetchAndSet(
    'quotes/index',
    dummyIndexPageData
  );

  return (
    <div>
      <Helmet>
        <title>Index Quotes | Finance App</title>
        <meta
          name='description'
          content='Free index quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <h1 className='page-heading'>Indexes</h1>

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews />
    </div>
  );
};

export default IndexPage;
