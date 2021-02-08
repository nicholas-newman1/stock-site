import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';
import { Helmet } from 'react-helmet-async';
import { dummyForexData } from '../../utils/dummyData';
import Heading from '../../components/dumb/Heading';
import BottomNews from '../../components/dumb/BottomNews';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import TableSortedPaginated from '../../components/dumb/TableSortedPaginated';
import { formatData, properties } from '../../utils/quoteTable';

const ForexPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { data, loading } = useFetch(
    [], // intial value
    'quotes/forex', // endpoint
    dummyForexData // dummy data
  );

  const dispatch = useDispatch();

  const { data: newsData, loading: loadingNews } = useSelector(
    (state: AppState) => state.news
  );

  useEffect(() => {
    dispatch(fetchNews('limit=10&tickers=AAPL,FB,AMZN,TSLA'));
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Helmet>
        <title>Forex Quotes | Finance App</title>
        <meta
          name='description'
          content='Free forex quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Forex' />

      <TableSortedPaginated
        data={data}
        formatData={formatData}
        loading={loading}
        properties={properties}
        initialSortProperty='name'
      />

      <BottomNews newsData={newsData} loading={loadingNews} />
    </div>
  );
};

export default ForexPage;
