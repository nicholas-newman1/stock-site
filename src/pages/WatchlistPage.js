import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../components/table/Table';
import BottomNews from '../components/bottomNews/BottomNews';
import Heading from '../components/heading/Heading';
import { dummyWatchlistData } from '../dummyData';
import { WatchlistContext } from '../context/WatchlistContext';
import useFetch from '../hooks/useFetch';
import useScrollTop from '../hooks/useScrollTop';

const WatchlistPage = () => {
  const { watchlist } = useContext(WatchlistContext);

  const { data, setData, loading } = useFetch(
    [], // intial value
    `quote/${watchlist.join()}`, // endpoint
    dummyWatchlistData // dummy data
  );

  useScrollTop(); // scrolls to top of page on component mount

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
      <BottomNews />
    </div>
  );
};

export default WatchlistPage;
