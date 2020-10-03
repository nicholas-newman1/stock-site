import React from 'react';
import { Link } from 'react-router-dom';

const PriceListItem = ({
  data: { symbol, price, change, percentChange, color, isPositive, category },
}) => {
  return (
    <tr>
      <td>
        <Link
          className='symbol-link'
          to={`/quote/${category}/${symbol.replace('/', '')}`}
        >
          {symbol}
        </Link>
      </td>
      <td>${price}</td>
      <td style={{ color }}>
        {isPositive && '+'}
        {change}
      </td>
      <td style={{ color }}>
        {isPositive && '+'}
        {percentChange}%
      </td>
    </tr>
  );
};

export default PriceListItem;
