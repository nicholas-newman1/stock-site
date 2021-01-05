import React from 'react';
import { Link } from 'react-router-dom';
import { decimalsToRoundTo, round } from '../../helpers';

interface Props {
  data: Quote;
}

const PriceRow: React.FC<Props> = ({ data }) => {
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
  let changeStr = '';
  let priceStr = '';
  if (change) changeStr = round(change, decimals, true);
  if (price) priceStr = round(price, decimals, true);

  return (
    <tr className='pricelist__tr'>
      <td className='pricelist__td'>
        <Link className='symbol-link' to={`/quote/${symbol}`}>
          {symbolText}
        </Link>
      </td>
      <td className='pricelist__td'>${priceStr}</td>
      <td className='pricelist__td' style={{ color }}>
        {isPositive && '+'}
        {changeStr}
      </td>
      <td className='pricelist__td' style={{ color }}>
        {isPositive && '+'}
        {changesPercentage}%
      </td>
    </tr>
  );
};

export default PriceRow;
