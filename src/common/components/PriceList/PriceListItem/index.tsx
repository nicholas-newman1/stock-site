import React from 'react';
import { Link } from 'react-router-dom';
import {
  decimalsToRoundTo,
  getChangeColor,
  insertDollarSign,
  roundLocale,
} from '../../../utils/helpers';
import { PriceListQuote } from '..';
import './priceListItem.css';

interface Props {
  data: PriceListQuote;
}

const PriceListItem: React.FC<Props> = ({ data }) => {
  let { symbol, price, change, changesPercentage } = data;
  const color = getChangeColor(change);
  const isPositive = change > 0;

  let symbolText = symbol;
  if (symbol === '^DJI') symbolText = 'DJIA';
  if (symbol === '^GSPC') symbolText = 'S&P 500';
  if (symbol === '^GSPTSE') symbolText = 'S&P/TSX';
  if (symbol === '^IXIC') symbolText = 'NASDAQ';

  // Round change and price based on maginitude of change in price
  let decimals = decimalsToRoundTo(change);
  let changeStr = `${isPositive ? '+' : ''}${insertDollarSign(
    roundLocale(change, decimals, true)
  )}`;
  let priceStr = roundLocale(price, decimals, true);
  let changesPercentageStr = `${isPositive ? '+' : ''}${roundLocale(
    changesPercentage,
    decimals
  )}%`;

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
