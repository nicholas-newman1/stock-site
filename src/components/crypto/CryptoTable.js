import React, { useContext } from 'react';
import CryptoTableRow from './CryptoTableRow';
import { CryptoContext } from '../../context/CryptoContext';

const CryptoTable = () => {
  const { cryptoData, page, resultsPerPage } = useContext(CryptoContext);

  const offset = page * resultsPerPage;

  return (
    <table>
      <thead>
        <tr className='crypto-tr'>
          <th className='crypto-th'>Symbol</th>
          <th className='crypto-th'>Name</th>
          <th className='crypto-th'>Price</th>
          <th className='crypto-th'>Change</th>
          <th className='crypto-th'>Percent Change</th>
          <th className='crypto-th'>Market Cap</th>
          <th className='crypto-th'>Volume</th>
        </tr>
      </thead>
      <tbody>
        {cryptoData.map((item, i) => {
          const itemInRange = i <= offset + resultsPerPage - 1 && i >= offset;
          return (
            itemInRange && <CryptoTableRow key={item.symbol} item={item} />
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoTable;
