import React, { useEffect } from 'react';
import PriceList from '../PriceList';
import { Link } from 'react-router-dom';
import './priceOverview.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { fetchPriceOverviewData } from '../../actions/priceOverviewActions';

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

  const indexQuotes = data.filter(({ symbol }) => {
    return ['^DJI', '^GSPC', '^IXIC', '^GSPTSE'].includes(symbol);
  });
  const stockQuotes = data.filter(({ symbol }) => {
    return ['AMZN', 'AAPL', 'FB', 'TSLA'].includes(symbol);
  });
  const forexQuotes = data.filter(({ symbol }) => {
    return ['CADUSD', 'CADEUR', 'CADGBP', 'CADJPY'].includes(symbol);
  });
  const cryptoQuotes = data.filter(({ symbol }) => {
    return ['BTCUSD', 'ETHUSD', 'XRPUSD', 'USDTUSD'].includes(symbol);
  });

  return (
    <ul className='price-overview'>
      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <Link className='price-overview__link' to='/indexes'>
            Indexes
          </Link>
        </h2>
        <PriceList quotes={indexQuotes} loading={loading} />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <Link className='price-overview__link' to='/stocks'>
            Stocks
          </Link>
        </h2>
        <PriceList quotes={stockQuotes} loading={loading} />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <Link className='price-overview__link' to='/forex'>
            Forex
          </Link>
        </h2>
        <PriceList quotes={forexQuotes} loading={loading} />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <Link className='price-overview__link' to='/cryptocurrencies'>
            Cryptocurrencies
          </Link>
        </h2>
        <PriceList quotes={cryptoQuotes} loading={loading} />
      </li>
    </ul>
  );
};

export default PriceOverview;
