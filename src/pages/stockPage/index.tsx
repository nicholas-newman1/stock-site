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
import Heading from '../../components/dumb/Heading';
import SectorTable from '../../components/SectorTable';
import BottomNews from '../../components/dumb/BottomNews';
import useFetch from '../../hooks/useFetch';
import useScrollTop from '../../hooks/useScrollTop';
import './stockPage.css';
import PriceList from '../../components/dumb/PriceList';
import HeadingLink from '../../components/dumb/HeadingLink';

interface MarketQuote {
  ticker: string;
  changes: number;
  price: string;
  changesPercentage: string;
  companyName: string;
}

interface MarketFetch {
  data: MarketQuote[];
  loading: boolean;
}

const StockPage: React.FC = () => {
  useScrollTop(); // scrolls to top of page on component mount

  const { data: activesData, loading: activesLoading }: MarketFetch = useFetch(
    [], // initial value
    'actives', // endpoint
    dummyActivesData // dummy data
  );

  const { data: gainersData, loading: gainersLoading }: MarketFetch = useFetch(
    [],
    'gainers',
    dummyGainersData
  );

  const { data: losersData, loading: losersLoading }: MarketFetch = useFetch(
    [],
    'losers',
    dummyLosersData
  );

  const filterQuotes = (quotes: MarketQuote[]) => {
    return quotes.filter((quote, i) => i < 4);
  };

  const formatData = (quotes: MarketQuote[]) => {
    return quotes.map((item) => ({
      symbol: item.ticker,
      price: parseFloat(item.price),
      change: item.changes,
      changesPercentage: parseFloat(item.changesPercentage.replace('(', '')),
    }));
  };

  const format = (quotes: MarketQuote[]) => {
    return formatData(filterQuotes(quotes));
  };

  const dispatch = useDispatch();

  const { data: newsData, loading: loadingNews } = useSelector(
    (state: AppState) => state.news
  );

  useEffect(() => {
    dispatch(fetchNews('limit=10&tickers=AAPL,FB,AMZN,TSLA'));
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

      <div className='stock-page__content'>
        <div className='stock-page__stocklists'>
          <div className='stock-page__stock-table'>
            <h2 className='stockpage__sub-heading'>
              <HeadingLink to=''>Actives</HeadingLink>
            </h2>
            <PriceList quotes={format(activesData)} loading={activesLoading} />
          </div>

          <div className='stock-page__stock-table'>
            <h2 className='stockpage__sub-heading'>
              <HeadingLink to=''>Gainers</HeadingLink>
            </h2>
            <PriceList quotes={format(gainersData)} loading={gainersLoading} />
          </div>

          <div className='stock-page__stock-table'>
            <h2 className='stockpage__sub-heading'>
              <HeadingLink to=''>Losers</HeadingLink>
            </h2>
            <PriceList quotes={format(losersData)} loading={losersLoading} />
          </div>
        </div>

        <div className='stock-page__sector-table'>
          <h2 className='stockpage__sub-heading'>Sectors</h2>
          <SectorTable />
        </div>
      </div>

      <BottomNews newsData={newsData} loading={loadingNews} />
    </div>
  );
};

export default StockPage;
