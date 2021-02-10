import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { fetchNews } from '../../actions/newsActions';
import { Helmet } from 'react-helmet-async';
import { dummyCommodityData } from '../../utils/dummyData';
import Heading from '../../components/Heading';
import BottomNews from '../../components/BottomNews';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import TableSortedPaginated from '../../components/TableSortedPaginated';
import { formatData, properties } from '../../utils/quoteTable';

const CommodityPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { data, loading } = useFetch(
    [], // intial value
    'quotes/commodity', // endpoint
    dummyCommodityData // dummy data
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
        <title>Commodity Quotes | Finance App</title>
        <meta
          name='description'
          content='Free commodity quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Commodities' />

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

export default CommodityPage;
