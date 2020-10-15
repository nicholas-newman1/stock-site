import React from 'react';
import { Link } from 'react-router-dom';

const PriceListItem = ({
  data: { symbol, price, change, percentChange, color, isPositive, category },
}) => {
  return (
    <tr className='pricelist-tr'>
      <td className='pricelist-td'>
        <Link className='symbol-link' to={`/quote/${symbol}/summary`}>
          {symbol}
        </Link>
      </td>
      <td className='pricelist-td'>${price}</td>
      <td className='pricelist-td' style={{ color }}>
        {isPositive && '+'}
        {change}
      </td>
      <td className='pricelist-td' style={{ color }}>
        {isPositive && '+'}
        {percentChange}%
      </td>
    </tr>
  );
};

export default PriceListItem;
