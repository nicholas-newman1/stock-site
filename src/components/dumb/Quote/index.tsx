import React from 'react';
import './quote.css';

interface Quote {
  price: any;
  change: any;
  changesPercentage: any;
  symbol: any;
  name: any;
  exchange: any;
  color: any;
}

interface Props {
  quote: Quote;
}

const Quote: React.FC<Props> = ({ quote }) => {
  return (
    <div className='quote'>
      <div className='quote__price-container'>
        <div className='quote__price'>${quote.price}</div>
        <div className='quote__change-container'>
          <div className='quote__change' style={{ color: quote.color }}>
            {quote.change}
          </div>
          <div className='quote__percent-change' style={{ color: quote.color }}>
            {`(${quote.changesPercentage}%)`}
          </div>
        </div>
      </div>

      <div className='quote__name-container'>
        <h1 className='quote__name'>
          {quote.symbol} | {quote.name}
        </h1>
        <div className='quote__exchange'>
          {quote.exchange && `(${quote.exchange})`}
        </div>
      </div>
    </div>
  );
};

export default Quote;
