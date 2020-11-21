import React from 'react';
import LoadingPriceList from './LoadingPriceList';
import PriceRow from './PriceRow';
import { dummyIndexData } from '../../../../dummyData';
import './priceTable.css';
import useFetchAndSet from '../../../../hooks/useFetchAndSet';

const PriceList = ({ symbols }) => {
  const { data, loading } = useFetchAndSet(
    [],
    `quote/${symbols.join()}`,
    dummyIndexData
  );

  return (
    <div className='pricelist-table-container'>
      <table className='pricelist-table'>
        <thead className='pricelist-thead'>
          <tr className='pricelist-tr'>
            <th className='pricelist-th'>Symbol</th>
            <th className='pricelist-th'>Price</th>
            <th className='pricelist-th'>Change ($)</th>
            <th className='pricelist-th'>Change (%)</th>
          </tr>
        </thead>

        <tbody className='pricelist-tbody'>
          {loading ? (
            <LoadingPriceList />
          ) : (
            data.map((quote) => <PriceRow key={quote.symbol} data={quote} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
