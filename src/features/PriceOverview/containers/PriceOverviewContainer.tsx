import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPriceOverviewData } from '../priceOverviewSlice';
import PriceListOverview from '../components/PriceOverview';
import { AppState } from '../../../app/rootReducer';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';

const PriceOverviewContainer = () => {
  const dispatch = useDispatch();

  const {
    priceOverview: { data, loading, error },
    realData,
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(
      fetchPriceOverviewData([
        '^DJI',
        '^GSPC',
        '^IXIC',
        '^GSPTSE',
        'AMZN',
        'AAPL',
        'FB',
        'TSLA',
        'CADUSD',
        'CADEUR',
        'CADGBP',
        'CADJPY',
        'BTCUSD',
        'ETHUSD',
        'XRPUSD',
        'USDTUSD',
      ])
    );
    //eslint-disable-next-line
  }, [realData.status]);

  const filterQuotes = (quotes: Quote[] = [], symbols: string[]) => {
    return quotes.filter(({ symbol }) => {
      return symbols.includes(symbol);
    });
  };

  const formatQuotes = (quotes: Quote[]) => {
    return quotes.map((quote) => ({
      symbol: quote.symbol,
      price: quote.price,
      change: quote.change,
      changesPercentage: quote.changesPercentage,
    }));
  };

  const format = (quotes: Quote[], symbols: string[]) => {
    return formatQuotes(filterQuotes(quotes, symbols));
  };

  return error || !data ? (
    <FetchErrorContainer error='Failed to fetch quotes' />
  ) : (
    <PriceListOverview
      pricelists={[
        {
          headingLink: 'Indexes',
          quotes: format(data, ['^DJI', '^GSPC', '^IXIC', '^GSPTSE']),
          loading,
        },
        {
          headingLink: 'Stocks',
          quotes: format(data, ['AMZN', 'AAPL', 'FB', 'TSLA']),
          loading,
        },
        {
          headingLink: 'Forex',
          quotes: format(data, ['CADUSD', 'CADEUR', 'CADGBP', 'CADJPY']),
          loading,
        },
        {
          headingLink: 'Cryptocurrencies',
          quotes: format(data, ['BTCUSD', 'ETHUSD', 'XRPUSD', 'USDTUSD']),
          loading,
        },
      ]}
    />
  );
};

export default PriceOverviewContainer;
