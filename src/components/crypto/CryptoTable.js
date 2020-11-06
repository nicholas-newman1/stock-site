import React, { useContext } from 'react';
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
          const color =
            item.change > 0 ? 'green' : item.change < 0 ? '#de0e00' : 'black';
          return (
            itemInRange && (
              <tr key={item.symbol} className='crypto-tr'>
                <td className='crypto-td'>{item.symbol}</td>
                <td className='crypto-td'>{item.name}</td>
                <td className='crypto-td'>{item.price}</td>
                <td className='crypto-td' style={{ color }}>
                  {item.change}
                </td>
                <td className='crypto-td' style={{ color }}>
                  {item.changesPercentage}
                </td>
                <td className='crypto-td'>{item.marketCap}</td>
                <td className='crypto-td'>{item.volume}</td>
              </tr>
            )
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoTable;
