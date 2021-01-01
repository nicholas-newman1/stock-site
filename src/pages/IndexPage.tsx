import React from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../components/table/Table';
import BottomNews from '../components/bottomNews/BottomNews';
import Heading from '../components/heading/Heading';
import { dummyIndexPageData } from '../dummyData';
import useFetch from '../hooks/useFetch';
import useScrollTop from '../hooks/useScrollTop';

const IndexPage: React.FC = () => {
  const { data, setData, loading } = useFetch(
    [], // intial value
    'quotes/index', // endpoint
    dummyIndexPageData // dummy data
  );

  useScrollTop(); // scrolls to top of page on component mount

  return (
    <div>
      <Helmet>
        <title>Index Quotes | Finance App</title>
        <meta
          name='description'
          content='Free index quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Indexes' />

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews />
    </div>
  );
};

export default IndexPage;
