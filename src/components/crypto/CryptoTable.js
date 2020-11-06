import React, { useContext } from 'react';
import CryptoTableRow from './CryptoTableRow';
import CryptoTableHead from './CryptoTableHead';
import { CryptoContext } from '../../context/CryptoContext';
import '../../css/crypto/cryptoTable.css';

const CryptoTable = () => {
  const { cryptoData, page, resultsPerPage } = useContext(CryptoContext);

  const offset = page * resultsPerPage;

  return (
    <table className='crypto-table'>
      <CryptoTableHead />
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
