import React from 'react';

const CryptoTableRow = ({ item }) => {
  const color =
    item.change > 0 ? 'green' : item.change < 0 ? '#de0e00' : 'black';

  return (
    <tr className='crypto-tr'>
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
  );
};

export default CryptoTableRow;
