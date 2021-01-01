import React from 'react';
import { Link } from 'react-router-dom';
import { decimalsToRoundTo, round } from '../../helpers';

const PriceRow = ({ data }) => {
  let { symbol, price, change, changesPercentage } = data;
  const color = change > 0 ? 'green' : '#de0e00';
  const isPositive = change > 0;

  let symbolText = symbol;
  if (symbol === '^DJI') symbolText = 'DJIA';
  if (symbol === '^GSPC') symbolText = 'S&P 500';
  if (symbol === '^GSPTSE') symbolText = 'S&P/TSX';
  if (symbol === '^IXIC') symbolText = 'NASDAQ';

  // Round change and price based on maginitude of change in price
  let decimals = decimalsToRoundTo(change);
  if (change) change = round(change, decimals, true);
  if (price) price = round(price, decimals, true);

  return (
    <tr className='pricelist__tr'>
      <td className='pricelist__td'>
        <Link className='symbol-link' to={`/quote/${symbol}`}>
          {symbolText}
        </Link>
      </td>
      <td className='pricelist__td'>${price}</td>
      <td className='pricelist__td' style={{ color }}>
        {isPositive && '+'}
        {change}
      </td>
      <td className='pricelist__td' style={{ color }}>
        {isPositive && '+'}
        {changesPercentage}%
      </td>
    </tr>
  );
};

export default PriceRow;
