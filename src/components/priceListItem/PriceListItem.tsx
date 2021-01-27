import React from 'react';
import { Link } from 'react-router-dom';
import {
  decimalsToRoundTo,
  getChangeColor,
  insertDollarSign,
  roundLocale,
} from '../../helpers';
import './priceListItem.css';

interface Props {
  data: KeyValueObject;
}

const PriceListItem: React.FC<Props> = ({ data }) => {
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
    typeof change === 'number'
      ? `${isPositive ? '+' : ''}${insertDollarSign(
          roundLocale(change, decimals, true)
        )}`
      : 'N/A';
  let priceStr =
    typeof price === 'number' ? roundLocale(price, decimals, true) : 'N/A';
  let changesPercentageStr = `${isPositive ? '+' : ''}${changesPercentage}%`;

  return (
    <li className='price-list-item'>
      <Link className='price-list-item__link' to={`/quote/${symbol}`}>
        <div className='price-list-item__symbol'>{symbolText}</div>
        <div>${priceStr}</div>
        <div style={{ color }}>{changeStr}</div>
        <div style={{ color }}>{changesPercentageStr}</div>
      </Link>
    </li>
  );
};

export default PriceListItem;
