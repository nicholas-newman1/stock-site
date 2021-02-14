import useFetch from '../../hooks/useFetch';
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

  return {
    activesData: formatMarketQuotes(activesData),
    activesLoading,
    gainersData: formatMarketQuotes(gainersData),
    gainersLoading,
    losersData: formatMarketQuotes(losersData),
    losersLoading,
    sectorsData,
    sectorsLoading,
  };
};

export default useStockPageData;
