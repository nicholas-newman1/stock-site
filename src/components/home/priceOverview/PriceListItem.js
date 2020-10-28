import React from 'react';
import { Link } from 'react-router-dom';

const PriceListItem = ({ data }) => {
  let { symbol, price, change, changesPercentage } = data;
  const color = change > 0 ? 'green' : '#de0e00';
  const isPositive = change > 0;

  let symbolText = symbol;
  if (symbol === '^DJI') symbolText = 'DJIA';
  if (symbol === '^GSPC') symbolText = 'S&P 500';
  if (symbol === '^GSPTSE') symbolText = 'S&P/TSX';
  if (symbol === '^IXIC') symbolText = 'NASDAQ';

  // number to represent how many decimals will be displayed
  let decimals = 2;

  // MOVE ALL DATA FORMATTING TO COMPONENT DISPLAYING THE DATA (LIKE DONE HERE)

  // determine number of decimal places to display, depending on the maginitude of the change
  while (
    change !== 0 &&
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
  change = change.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  // limit price decimal places
  price = price.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  // limit changesPercentage decimal places
  changesPercentage = changesPercentage.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });

  return (
    <tr className='pricelist-tr'>
      <td className='pricelist-td'>
        <Link className='symbol-link' to={`/quote/${symbol}/summary`}>
          {symbolText}
        </Link>
      </td>
      <td className='pricelist-td'>${price}</td>
      <td className='pricelist-td' style={{ color }}>
        {isPositive && '+'}
        {change}
      </td>
      <td className='pricelist-td' style={{ color }}>
        {isPositive && '+'}
        {changesPercentage}%
      </td>
    </tr>
  );
};

export default PriceListItem;
