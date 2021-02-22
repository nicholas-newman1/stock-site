import React from 'react';
import PriceListItem from './PriceListItem';
import PriceListItemLoading from './PriceListItemLoading';
import './priceList.css';
import FetchErrorContainer from '../../containers/FetchErrorContainer';

export interface PriceListQuote {
  symbol: string;
  price: number;
  change: number;
  changesPercentage: number;
}

interface Props {
  quotes: PriceListQuote[];
  loading: boolean;
  error: string;
}

const PriceList: React.FC<Props> = ({ quotes, loading, error }) => {
  const loadingRows = [0, 1, 2, 3];

  return (
    <ul className='price-list'>
      {loading ? (
        loadingRows.map((id) => (
          <div key={id} className='price-list__item'>
            <PriceListItemLoading />
          </div>
        ))
      ) : error ? (
        <FetchErrorContainer error='Failed to fetch quotes' />
      ) : (
        quotes.map((quote) => (
          <div key={quote.symbol} className='price-list__item'>
            <PriceListItem data={quote} />
          </div>
        ))
      )}
    </ul>
  );
};

export default PriceList;
