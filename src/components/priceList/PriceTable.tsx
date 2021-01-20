import React from 'react';
import LoadingPriceList from './LoadingPriceList';
import PriceRow from './PriceRow';
import { dummyIndexData } from '../../dummyData';
import './priceTable.css';
import useFetch from '../../hooks/useFetch';

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
    <div className='pricelist__table-container'>
      <table className='pricelist__table'>
        <thead className='pricelist__thead'>
          <tr className='pricelist__tr'>
            <th className='pricelist__th'>Symbol</th>
            <th className='pricelist__th'>Price</th>
            <th className='pricelist__th'>Change ($)</th>
            <th className='pricelist__th'>Change (%)</th>
          </tr>
        </thead>

        <tbody className='pricelist__tbody'>
          {loading ? (
            <LoadingPriceList />
          ) : (
            data.map((quote: APIObject) => (
              <PriceRow key={quote.symbol} data={quote} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
