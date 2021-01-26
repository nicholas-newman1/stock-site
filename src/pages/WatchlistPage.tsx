import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../components/table/Table';
import BottomNews from '../components/bottomNews/BottomNews';
import Heading from '../components/heading/Heading';
import { dummyWatchlistData } from '../dummyData';
import { WatchlistContext } from '../context/WatchlistContext';
import useFetch from '../hooks/useFetch';
import useFetch2 from '../hooks/useFetch2';
import useScrollTop from '../hooks/useScrollTop';

const WatchlistPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { watchlist } = useContext(WatchlistContext);

  const { data, setData, loading } = useFetch(
    [], // intial value
    `quote/${watchlist.join()}`, // endpoint
    dummyWatchlistData // dummy data
  );

  const { data: newsData, loading: loadingNews } = useFetch2(
    [], // initial value
    'stock_news', // endpoint
    'limit=10' // params
  );

  return (
    <div>
      <Helmet>
        <title>Watchlist | Finance App</title>
        <meta
          name='description'
          content='Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Watchlist' />

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews newsData={newsData} loading={loadingNews} />
    </div>
  );
};

export default WatchlistPage;
