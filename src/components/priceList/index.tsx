import React from 'react';
import { Quote } from '../../types/APITypes';
import PriceListItem from '../PriceListItem';
import PriceListItemLoading from '../PriceListItemLoading';
import './priceList.css';

interface Props {
  quotes: Quote[];
  loading: boolean;
}

const PriceList: React.FC<Props> = ({ quotes, loading }) => {
  const loadingRows = [0, 1, 2, 3];

  return (
    <ul className='price-list'>
      {loading
        ? loadingRows.map((id) => (
            <div key={id} className='price-list__item'>
              <PriceListItemLoading />
            </div>
          ))
        : quotes.map((quote) => (
            <div key={quote.symbol} className='price-list__item'>
              <PriceListItem data={quote} />
            </div>
          ))}
    </ul>
  );
};

export default PriceList;
