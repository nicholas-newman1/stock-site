import React from 'react';
import PriceListItem from '../PriceListItem';
import PriceListItemLoading from '../PriceListItemLoading';
import './priceList.css';

export interface PriceListQuote {
  symbol: string;
  price: number;
  change: number;
  changesPercentage: number;
}

interface Props {
  quotes: PriceListQuote[];
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
