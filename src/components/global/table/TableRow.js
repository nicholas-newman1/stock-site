import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ item, index }) => {
  let { symbol, name, price, change, changesPercentage, marketCap } = item;

  const color = change > 0 ? 'green' : change < 0 ? '#de0e00' : 'black';
  const background = index % 2 === 1 ? 'white' : '#eee';

  // Determine number of decimals to round to based on the maginitude of the price change
  let decimals = 2;
  while (
    change &&
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
  if (change) {
    change = change.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  }

  // limit price decimal places
  if (price) {
    price = price.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  }

  // limit changesPercentage decimal places
  if (changesPercentage) {
    changesPercentage = changesPercentage.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
    });
  }

  return (
    <tr className='table-tr' style={{ background }}>
      <td className='table-td-sticky' style={{ background }}>
        <Link className='table-td-link' to={`/quote/${symbol}`}>
          {symbol}
        </Link>
      </td>
      <td className='table-td'>{name}</td>
      <td className='table-td'>${price}</td>
      <td className='table-td' style={{ color }}>
        {change > 0 && '+'}
        {change}
      </td>
      <td className='table-td' style={{ color }}>
        {changesPercentage}%
      </td>
    </tr>
  );
};

export default TableRow;
