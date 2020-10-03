import React from 'react';
import { Link } from 'react-router-dom';
//import WatchList from './WatchList';
import StockList from './StockList';
import ForexList from './ForexList';
import CryptoList from './CryptoList';
import '../../../css/home/priceList/priceList.css';

const PriceList = () => {
  return (
    <ul className='pricelist'>
      {/* <li className='pricelist-item'>
        <h2 className='pricelist-heading'>
          <Link className='pricelist-link' to='/watchlist'>
            Watchlist
          </Link>
        </h2>
        <WatchList />
      </li> */}
      <li className='pricelist-item'>
        <h2 className='pricelist-heading'>
          <Link className='pricelist-link' to='/stocks'>
            Stocks
          </Link>
        </h2>
        <StockList />
      </li>
      <li className='pricelist-item'>
        <h2 className='pricelist-heading'>
          <Link className='pricelist-link' to='/forex'>
            Forex
          </Link>
        </h2>
        <ForexList />
      </li>
      <li className='pricelist-item'>
        <h2 className='pricelist-heading'>
          <Link className='pricelist-link' to='/cryptocurrencies'>
            Cryptocurrencies
          </Link>
        </h2>
        <CryptoList />
      </li>
    </ul>
  );
};

export default PriceList;
