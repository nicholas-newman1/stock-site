import React from 'react';
import PriceList from './PriceList';
//import WatchList from './WatchList';
import './priceOverview.css';

const PriceOverview = () => {
  return (
    <ul className='pricelist'>
      <PriceList
        heading='Indexes'
        symbols={['^DJI', '^GSPC', '^IXIC', '^GSPTSE']}
      />
      <PriceList heading='Stocks' symbols={['AMZN', 'AAPL', 'FB', 'TSLA']} />
      <PriceList
        heading='Forex'
        symbols={['CADUSD', 'CADEUR', 'CADGBP', 'CADJPY']}
      />
      <PriceList
        heading='Cryptocurrencies'
        symbols={['BTCUSD', 'ETHUSD', 'XRPUSD', 'USDTUSD']}
      />
    </ul>
  );
};

export default PriceOverview;
