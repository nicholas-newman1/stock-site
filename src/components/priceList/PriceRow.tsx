import React from 'react';
import { Link } from 'react-router-dom';
import { decimalsToRoundTo, getChangeColor, roundLocale } from '../../helpers';

interface Props {
  data: KeyValueObject;
}

const PriceRow: React.FC<Props> = ({ data }) => {
  let { symbol, price, change, changesPercentage } = data;
  const color = getChangeColor(change);
  const isPositive = typeof change === 'number' && change > 0;

  let symbolText = symbol;
  if (symbol === '^DJI') symbolText = 'DJIA';
  if (symbol === '^GSPC') symbolText = 'S&P 500';
  if (symbol === '^GSPTSE') symbolText = 'S&P/TSX';
  if (symbol === '^IXIC') symbolText = 'NASDAQ';

  // Round change and price based on maginitude of change in price
  let decimals = typeof change === 'number' ? decimalsToRoundTo(change) : 2;
  let changeStr =
    typeof change === 'number' ? roundLocale(change, decimals, true) : 'N/A';
  let priceStr =
    typeof price === 'number' ? roundLocale(price, decimals, true) : 'N/A';

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
