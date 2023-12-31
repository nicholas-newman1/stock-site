import React from 'react';
import PriceListItem from './PriceListItem';
import PriceListItemLoading from './PriceListItemLoading';
import './priceList.css';
import { Link } from 'react-router-dom';

export interface PriceListQuote {
  symbol: string;
  price: number;
  change: number;
  changesPercentage: number;
}

interface Props {
  quotes: PriceListQuote[];
  link: {
    to: string;
    label: string;
  };
  loading: boolean;
}

const PriceList: React.FC<Props> = ({
  quotes,
  link: { to, label },
  loading,
}) => {
  const loadingRows = [0, 1, 2, 3];

  return (
    <section className='price-list'>
      <h2 className='price-list__heading'>
        <Link className='heading-link' to={to}>
          {label}
        </Link>
      </h2>
      <ul className='price-list__list'>
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
    </section>
  );
};

export default PriceList;
