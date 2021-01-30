import React, { useEffect } from 'react';
import PriceList from '../../dumb/PriceList';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../reducers/rootReducer';
import { fetchPriceOverviewData } from '../../../actions/priceOverviewActions';
import { Quote } from '../../../types/APITypes';
import HeadingLink from '../../dumb/HeadingLink';
import './priceOverview.css';

const PriceOverview: React.FC = () => {
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

  return (
    <ul className='price-overview'>
      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <HeadingLink to='/indexes'>Indexes</HeadingLink>
        </h2>
        <PriceList
          quotes={format(data, ['^DJI', '^GSPC', '^IXIC', '^GSPTSE'])}
          loading={loading}
        />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <HeadingLink to='/stocks'>Stocks</HeadingLink>
        </h2>
        <PriceList
          quotes={format(data, ['AMZN', 'AAPL', 'FB', 'TSLA'])}
          loading={loading}
        />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <HeadingLink to='/forex'>Forex</HeadingLink>
        </h2>
        <PriceList
          quotes={format(data, ['CADUSD', 'CADEUR', 'CADGBP', 'CADJPY'])}
          loading={loading}
        />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <HeadingLink to='/cryptocurrencies'>Cryptocurrencies</HeadingLink>
        </h2>
        <PriceList
          quotes={format(data, ['BTCUSD', 'ETHUSD', 'XRPUSD', 'USDTUSD'])}
          loading={loading}
        />
      </li>
    </ul>
  );
};

export default PriceOverview;
