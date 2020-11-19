import React from 'react';
import PriceTable from './PriceTable';
//import WatchList from './WatchList';
import { Link } from 'react-router-dom';
import './priceList.css';

const PriceList = () => {
  return (
    <ul className='pricelist'>
      <li className='pricelist-item'>
        <h2 className='pricelist-heading'>
          <Link className='pricelist-link' to='/indexes'>
            Indexes
          </Link>
        </h2>
        <PriceTable symbols={['^DJI', '^GSPC', '^IXIC', '^GSPTSE']} />
      </li>

      <li className='pricelist-item'>
        <h2 className='pricelist-heading'>
          <Link className='pricelist-link' to='/stocks'>
            Stocks
          </Link>
        </h2>
        <PriceTable symbols={['AMZN', 'AAPL', 'FB', 'TSLA']} />
      </li>

      <li className='pricelist-item'>
        <h2 className='pricelist-heading'>
          <Link className='pricelist-link' to='/forex'>
            Forex
          </Link>
        </h2>
        <PriceTable symbols={['CADUSD', 'CADEUR', 'CADGBP', 'CADJPY']} />
      </li>

      <li className='pricelist-item'>
        <h2 className='pricelist-heading'>
          <Link className='pricelist-link' to='/cryptocurrencies'>
            Cryptocurrencies
          </Link>
        </h2>
        <PriceTable symbols={['BTCUSD', 'ETHUSD', 'XRPUSD', 'USDTUSD']} />
      </li>
    </ul>
  );
};

export default PriceList;
