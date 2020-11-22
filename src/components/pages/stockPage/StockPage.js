import React from 'react';
import { Helmet } from 'react-helmet-async';
import BottomNews from '../../global/bottomNews/BottomNews';
import Heading from '../../global/heading/Heading';
import {
  dummyActivesData,
  dummyGainersData,
  dummyLosersData,
} from '../../../dummyData';
import StockTable from './StockTable';
import SectorTable from './SectorTable';
import './stockPage.css';
import useFetch from '../../../hooks/useFetch';

const StockPage = () => {
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

      <BottomNews />
    </div>
  );
};

export default StockPage;
