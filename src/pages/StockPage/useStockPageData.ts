import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/newsActions';
import useFetch from '../../hooks/useFetch';
import { AppState } from '../../reducers/rootReducer';
import {
  dummyActivesData,
  dummyGainersData,
  dummyLosersData,
  dummySectorsData,
} from '../../utils/dummyData';
import { formatMarketQuotes } from './helpers';

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

interface SectorFetch {
  data: SectorQuote[];
  loading: boolean;
}

const useStockPageData = () => {
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

  const { data: sectorsData, loading: sectorsLoading }: SectorFetch = useFetch(
    [], // intial value
    'sectors-performance', // endpoint
    dummySectorsData // dummy data
  );

  const dispatch = useDispatch();

  const { data: newsData, loading: newsLoading } = useSelector(
    (state: AppState) => state.news
  );

  useEffect(() => {
    dispatch(fetchNews('limit=10&tickers=AAPL,FB,AMZN,TSLA'));
    //eslint-disable-next-line
  }, []);

  return {
    activesData: formatMarketQuotes(activesData),
    activesLoading,
    gainersData: formatMarketQuotes(gainersData),
    gainersLoading,
    losersData: formatMarketQuotes(losersData),
    losersLoading,
    sectorsData,
    sectorsLoading,
    newsData,
    newsLoading,
  };
};

export default useStockPageData;
