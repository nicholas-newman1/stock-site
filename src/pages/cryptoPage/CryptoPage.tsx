import React from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../../components/table/Table';
import BottomNews from '../../components/bottomNews/BottomNews';
import Heading from '../../components/heading/Heading';
import { dummyCryptoData } from '../../dummyData';
import useFetch from '../../hooks/useFetch';
import useFetch2 from '../../hooks/useFetch2';
import useScrollTop from '../../hooks/useScrollTop';

const CryptoPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { data, setData, loading } = useFetch(
    [], // intial value
    'quotes/crypto', // endpoint
    dummyCryptoData // dummy data
  );

  const { data: newsData, loading: loadingNews } = useFetch2(
    [], // initial value
    'stock_news', // endpoint
    'limit=10' // params
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

      <Heading text='Cryptocurrencies' />

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews newsData={newsData} loading={loadingNews} />
    </div>
  );
};

export default CryptoPage;
