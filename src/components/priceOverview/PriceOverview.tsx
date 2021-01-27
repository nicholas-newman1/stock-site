import React from 'react';
import PriceList from '../priceList/PriceList';
import { Link } from 'react-router-dom';
import './priceOverview.css';

const PriceOverview: React.FC = () => {
  return (
    <ul className='price-overview'>
      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <Link className='price-overview__link' to='/indexes'>
            Indexes
          </Link>
        </h2>
        <PriceList symbols={['^DJI', '^GSPC', '^IXIC', '^GSPTSE']} />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <Link className='price-overview__link' to='/stocks'>
            Stocks
          </Link>
        </h2>
        <PriceList symbols={['AMZN', 'AAPL', 'FB', 'TSLA']} />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <Link className='price-overview__link' to='/forex'>
            Forex
          </Link>
        </h2>
        <PriceList symbols={['CADUSD', 'CADEUR', 'CADGBP', 'CADJPY']} />
      </li>

      <li className='price-overview__item'>
        <h2 className='price-overview__heading'>
          <Link className='price-overview__link' to='/cryptocurrencies'>
            Cryptocurrencies
          </Link>
        </h2>
        <PriceList symbols={['BTCUSD', 'ETHUSD', 'XRPUSD', 'USDTUSD']} />
      </li>
    </ul>
  );
};

export default PriceOverview;
