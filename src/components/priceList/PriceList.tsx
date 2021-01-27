import React from 'react';
import PriceListItemLoading from '../priceListItemLoading/PriceListItemLoading';
import PriceListItem from '../priceListItem/PriceListItem';
import { dummyIndexData } from '../../dummyData';
import useFetch from '../../hooks/useFetch';
import './priceList.css';

interface Props {
  symbols: string[];
}

const PriceList: React.FC<Props> = ({ symbols }) => {
  const { data, loading } = useFetch(
    [], // intial value
    `quote/${symbols.join()}`, //endpoint
    dummyIndexData // dummy data
  );

  return (
    <ul className='price-list'>
      {loading
        ? symbols.map((symbol) => (
            <div key={symbol} className='price-list__item'>
              <PriceListItemLoading />
            </div>
          ))
        : data.map((quote: KeyValueObject) => (
            <div key={quote.symbol} className='price-list__item'>
              <PriceListItem data={quote} />
            </div>
          ))}
    </ul>
  );
};

export default PriceList;
