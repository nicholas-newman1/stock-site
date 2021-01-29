import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import { AppState } from '../../reducers/rootReducer';
import { Helmet } from 'react-helmet-async';
import {
  dummyActivesData,
  dummyGainersData,
  dummyLosersData,
} from '../../dummyData';
import Heading from '../../components/heading/Heading';
import StockTable from '../../components/stockTable/StockTable';
import SectorTable from '../../components/sectorTable/SectorTable';
import BottomNews from '../../components/bottomNews/BottomNews';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import './stockPage.css';

const StockPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { data: activesData, loading: activesLoading } = useFetch(
    [], // initial value
    'actives', // endpoint
    dummyActivesData // dummy data
  );

  const { data: gainersData, loading: gainersLoading } = useFetch(
    [],
    'gainers',
    dummyGainersData
  );

  const { data: losersData, loading: losersLoading } = useFetch(
    [],
    'losers',
    dummyLosersData
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
    <div className='stock-page'>
      <Helmet>
        <title>Stock Quotes | Finance App</title>
        <meta
          name='description'
          content='Free stock quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <Heading text='Stocks' />

      <div className='stock-page__stocklists'>
        <div className='stock-page__stock-table'>
          <h2 className='stockpage__sub-heading'>Actives</h2>
          <StockTable data={activesData} loading={activesLoading} />
        </div>

        <div className='stock-page__stock-table'>
          <h2 className='stockpage__sub-heading'>Gainers</h2>
          <StockTable data={gainersData} loading={gainersLoading} />
        </div>

        <div className='stock-page__stock-table'>
          <h2 className='stockpage__sub-heading'>Losers</h2>
          <StockTable data={losersData} loading={losersLoading} />
        </div>
      </div>

      <div className='stock-page__sector-table'>
        <h2 className='stockpage__sub-heading'>Sectors</h2>
        <SectorTable />
      </div>

      <BottomNews newsData={newsData} loading={loadingNews} />
    </div>
  );
};

export default StockPage;
