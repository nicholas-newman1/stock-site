import React, { useContext } from 'react';
import { QuoteContext } from '../../context/QuoteContext';
import './quote.css';

const Quote: React.FC = () => {
  const { quote } = useContext(QuoteContext);

  return (
    <div className='quote'>
      <div className='quote__price-container'>
        <div className='quote__price'>${quote.price}</div>
        <div className='quote__change-container'>
          <div
            className='quote__change'
            style={{
              color: typeof quote.color === 'string' ? quote.color : 'black',
            }}
          >
            {typeof quote.change === 'string' &&
              quote.change.charAt(0) !== '-' &&
              '+'}
            {quote.change}
          </div>
          <div
            className='quote__percent-change'
            style={{
              color: typeof quote.color === 'string' ? quote.color : 'black',
            }}
          >
            {'('}
            {typeof quote.change === 'string' &&
              quote.change.charAt(0) !== '-' &&
              '+'}
            {quote.changesPercentage}
            {'%)'}
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
