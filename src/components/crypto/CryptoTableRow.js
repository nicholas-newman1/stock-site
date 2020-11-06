import React from 'react';
import { shortenNumber } from '../helpers';

const CryptoTableRow = ({ item, index }) => {
  let {
    symbol,
    name,
    price,
    change,
    changesPercentage,
    marketCap,
    volume,
  } = item;

  const color = change > 0 ? 'green' : change < 0 ? '#de0e00' : 'black';
  const background = index % 2 === 0 ? 'white' : '#eee';

  // Determine number of decimals to round to based on the maginitude of the price change
  let decimals = 2;
  while (
    change !== 0 &&
    (change.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
    }) === '0' ||
      change.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
      }) === '-0')
  ) {
    decimals++;
  }

  // limit change decimal places
  change = change.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  // limit price decimal places
  price = price.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  // limit changesPercentage decimal places
  changesPercentage = changesPercentage.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });

  return (
    <tr className='crypto-tr' style={{ background }}>
      <td className='crypto-td-sticky' style={{ background }}>
        {symbol}
      </td>
      <td className='crypto-td'>{name}</td>
      <td className='crypto-td'>${price}</td>
      <td className='crypto-td' style={{ color }}>
        {change > 0 && '+'}
        {change}
      </td>
      <td className='crypto-td' style={{ color }}>
        {changesPercentage}%
      </td>
      <td className='crypto-td'>{shortenNumber(marketCap)}</td>
      <td className='crypto-td'>{shortenNumber(volume)}</td>
    </tr>
  );
};

export default CryptoTableRow;
