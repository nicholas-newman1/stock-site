import React from 'react';
import { Quote as QuoteType } from '../../types/APITypes';
import { formatQuoteData } from '../../utils/helpers';
import Spinner from '../Spinner';
import './quote.css';

interface Props {
  quote: QuoteType;
  loading: boolean;
}

const Quote: React.FC<Props> = ({ quote, loading }) => {
  if (loading) return <Spinner />;

  const {
    price,
    color,
    change,
    changesPercentage,
    symbol,
    name,
    exchange,
  } = formatQuoteData(quote);

  return (
    <div className='quote'>
      <div className='quote__price-container'>
        <div className='quote__price'>${price}</div>
        <div className='quote__change-container'>
          <div className='quote__change' style={{ color }}>
            {change}
          </div>
          <div className='quote__percent-change' style={{ color }}>
            {`(${changesPercentage}%)`}
          </div>
        </div>
      </div>

      <div className='quote__name-container'>
        <h1 className='quote__name'>
          {symbol} | {name}
        </h1>
        <div className='quote__exchange'>{exchange && `(${exchange})`}</div>
      </div>
    </div>
  );
};

export default Quote;
