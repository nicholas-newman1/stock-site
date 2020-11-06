import React, { useContext } from 'react';
import CryptoTableRow from './CryptoTableRow';
import { CryptoContext } from '../../context/CryptoContext';
import '../../css/crypto/cryptoTable.css';

const CryptoTable = () => {
  const { cryptoData, page, resultsPerPage } = useContext(CryptoContext);

  const offset = page * resultsPerPage;

  return (
    <table className='crypto-table'>
      <thead>
        <tr className='crypto-tr'>
          <th className='crypto-th-sticky'>Symbol</th>
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
            itemInRange && (
              <CryptoTableRow key={item.symbol} item={item} index={i} />
            )
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoTable;
