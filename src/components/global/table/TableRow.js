import React from 'react';
import { Link } from 'react-router-dom';
import { decimalsToRoundTo, round } from '../../../helpers';

const TableRow = ({ item, index }) => {
  let { symbol, name, price, change, changesPercentage } = item;

  const color = change > 0 ? 'green' : change < 0 ? '#de0e00' : 'black';
  const background = index % 2 === 1 ? 'white' : '#eee';

  // Round values based on maginitude of change in price
  let decimals = decimalsToRoundTo(change);
  if (change) change = round(change, decimals, true);
  if (price) price = round(price, decimals, true);

  return (
    <tr className='table__tr' style={{ background }}>
      <td className='table__td-sticky' style={{ background }}>
        <Link className='table__td-link' to={`/quote/${symbol}`}>
          {symbol}
        </Link>
      </td>
      <td className='table__td'>{name}</td>
      <td className='table__td'>${price}</td>
      <td className='table__td' style={{ color }}>
        {change > 0 && '+'}
        {change}
      </td>
      <td className='table__td' style={{ color }}>
        {changesPercentage}%
      </td>
    </tr>
  );
};

export default TableRow;
