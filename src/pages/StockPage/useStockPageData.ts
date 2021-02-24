import useFetch from '../../common/hooks/useFetch';
import {
  dummyActivesData,
  dummyGainersData,
  dummyLosersData,
} from '../../app/dummyData';
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

  return {
    activesData: formatMarketQuotes(activesData),
    activesLoading,
    gainersData: formatMarketQuotes(gainersData),
    gainersLoading,
    losersData: formatMarketQuotes(losersData),
    losersLoading,
  };
};

export default useStockPageData;
