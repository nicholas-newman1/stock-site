import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BottomNews from '../../components/BottomNews';
import Heading from '../../components/Heading';
import { dummyIndexPageData } from '../../utils/dummyData';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';
import TableSortedPaginated from '../../components/TableSortedPaginated';
import { formatData, properties } from '../../utils/quoteTable';

const IndexPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { data, loading } = useFetch(
    [], // intial value
    'quotes/index', // endpoint
    dummyIndexPageData // dummy data
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
        <title>Index Quotes | Finance App</title>
        <meta
          name='description'
          content='Free index quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Indexes' />

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

export default IndexPage;
