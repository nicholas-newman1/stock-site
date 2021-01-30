import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';
import { Helmet } from 'react-helmet-async';
import { dummyWatchlistData } from '../../dummyData';
import Heading from '../../components/heading/Heading';
import Table from '../../components/table/Table';
import BottomNews from '../../components/bottomNews/BottomNews';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';

const WatchlistPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const watchlist = useSelector((state: AppState) => state.watchlist);

  const { data, setData, loading } = useFetch(
    [], // intial value
    `quote/${watchlist.join()}`, // endpoint
    dummyWatchlistData // dummy data
  );

  const dispatch = useDispatch();

  const { data: newsData, loading: loadingNews } = useSelector(
    (state: AppState) => state.news
  );

  useEffect(() => {
    dispatch(fetchNews('limit=10'));
    //eslint-disable-next-line
  }, []);

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
