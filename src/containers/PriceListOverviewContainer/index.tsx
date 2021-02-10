import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPriceOverviewData } from '../../actions/priceOverviewActions';
import PriceListOverview from '../../components/dumb/PriceListOverview';
import { AppState } from '../../reducers/rootReducer';
import { Quote } from '../../types/APITypes';

const PriceListOverviewContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: AppState) => state.priceOverview
  );

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
  }, []);

  const filterQuotes = (quotes: Quote[], symbols: string[]) => {
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

  const pricelists = [
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
  ];

  return <PriceListOverview pricelists={pricelists} />;
};

export default PriceListOverviewContainer;
