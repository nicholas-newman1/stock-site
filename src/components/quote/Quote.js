import React, { useContext } from 'react';
import { QuoteContext } from '../../context/QuoteContext';

const Quote = ({ symbol }) => {
  const { quote } = useContext(QuoteContext);
  return (
    <>
      <div className='quote-price-container'>
        <div className='quote-price'>${quote.price}</div>
        <div className='quote-change' style={{ color: quote.color }}>
          {quote.isPositive && '+'}
          {quote.change}
        </div>
        <div className='quote-percent-change' style={{ color: quote.color }}>
          {'('}
          {quote.isPositive && '+'}
          {quote.percentChange}
          {'%)'}
        </div>
      </div>

      <div className='quote-name-container'>
        <h1 className='quote-name'>
          {quote.symbol} | {quote.name}
        </h1>
        <div className='quote-exchange'>{`(${quote.exchange})`}</div>
      </div>
    </>
  );
};

export default Quote;
