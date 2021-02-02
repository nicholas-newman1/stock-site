import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../../components/Table/Table';
import BottomNews from '../../components/smart/BottomNews';
import Heading from '../../components/dumb/Heading';
import { dummyIndexPageData } from '../../dummyData';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';

const IndexPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { data, setData, loading } = useFetch(
    [], // intial value
    'quotes/index', // endpoint
    dummyIndexPageData // dummy data
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
        <title>Index Quotes | Finance App</title>
        <meta
          name='description'
          content='Free index quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Indexes' />

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews newsData={newsData} loading={loadingNews} />
    </div>
  );
};

export default IndexPage;
