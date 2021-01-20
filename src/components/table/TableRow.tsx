import React from 'react';
import { Link } from 'react-router-dom';
import { decimalsToRoundTo, getChangeColor, roundLocale } from '../../helpers';

interface Props {
  item: APIObject;
  index: number;
}

const TableRow: React.FC<Props> = ({ item, index }) => {
  let { symbol, name, price, change, changesPercentage } = item;

  const color = getChangeColor(change);
  const isPositive = typeof change === 'number' && change > 0;
  const background = index % 2 === 1 ? 'white' : '#eee';

  // Round values based on maginitude of change in price
  let decimals = typeof change === 'number' ? decimalsToRoundTo(change) : 2;
  let changeStr =
    typeof change === 'number' ? roundLocale(change, decimals, true) : 'N/A';
  let priceStr =
    typeof price === 'number' ? roundLocale(price, decimals, true) : 'N/A';

  return (
    <tr className='table__tr' style={{ background }}>
      <td className='table__td-sticky' style={{ background }}>
        <Link className='table__td-link' to={`/quote/${symbol}`}>
          {symbol}
        </Link>
      </td>
      <td className='table__td'>{name}</td>
      <td className='table__td'>${priceStr}</td>
      <td className='table__td' style={{ color }}>
        {isPositive && '+'}
        {changeStr}
      </td>
      <td className='table__td' style={{ color }}>
        {changesPercentage}%
      </td>
    </tr>
  );
};

export default TableRow;
