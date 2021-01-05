import React from 'react';
import PriceTable from './PriceTable';
import { Link } from 'react-router-dom';
import './priceList.css';

const PriceList: React.FC = () => {
  return (
    <ul className='pricelist'>
      <li className='pricelist__item'>
        <h2 className='pricelist__heading'>
          <Link className='pricelist__link' to='/indexes'>
            Indexes
          </Link>
        </h2>
        <PriceTable symbols={['^DJI', '^GSPC', '^IXIC', '^GSPTSE']} />
      </li>

      <li className='pricelist__item'>
        <h2 className='pricelist__heading'>
          <Link className='pricelist__link' to='/stocks'>
            Stocks
          </Link>
        </h2>
        <PriceTable symbols={['AMZN', 'AAPL', 'FB', 'TSLA']} />
      </li>

      <li className='pricelist__item'>
        <h2 className='pricelist__heading'>
          <Link className='pricelist__link' to='/forex'>
            Forex
          </Link>
        </h2>
        <PriceTable symbols={['CADUSD', 'CADEUR', 'CADGBP', 'CADJPY']} />
      </li>

      <li className='pricelist__item'>
        <h2 className='pricelist__heading'>
          <Link className='pricelist__link' to='/cryptocurrencies'>
            Cryptocurrencies
          </Link>
        </h2>
        <PriceTable symbols={['BTCUSD', 'ETHUSD', 'XRPUSD', 'USDTUSD']} />
      </li>
    </ul>
  );
};

export default PriceList;
