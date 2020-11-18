import React from 'react';
import LoadingStockList from './LoadingStockList';
import StockListItem from './StockListItem';
import './stockTable.css';

const StockList = ({ heading, data, loading }) => {
  return (
    <table className='stocktable'>
      <thead className='stocktable__thead'>
        <tr className='stocktable__tr'>
          <th className='stocktable__th'>Symbol</th>
          <th className='stocktable__th'>Price</th>
          <th className='stocktable__th'>Change ($)</th>
          <th className='stocktable__th'>Change (%)</th>
        </tr>
      </thead>
      <tbody className='stocktable__tbody'>
        {loading ? (
          <LoadingStockList />
        ) : (
          data.map(
            (quote, i) =>
              i < 4 && <StockListItem key={quote.ticker} data={quote} />
          )
        )}
      </tbody>
    </table>
  );
};

export default StockList;
