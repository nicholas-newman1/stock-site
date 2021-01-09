import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  data: MarketQuote;
}

const PriceListItem: React.FC<Props> = ({ data }) => {
  let { ticker, price, changes, changesPercentage } = data;
  const color = changes > 0 ? 'green' : '#de0e00';
  const isPositive = changes > 0;

  // number to represent how many decimals will be displayed
  let decimals = 2;

  // determine number of decimal places to display, depending on the maginitude of the changes
  while (
    changes &&
    (changes.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
    }) === '0' ||
      changes.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
      }) === '-0')
  ) {
    decimals++;
  }

  // limit changes decimal places
  let changesStr = '';
  if (changes) {
    changesStr = changes.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  }

  // limit price decimal places
  let priceStr = '';
  if (price) {
    priceStr = parseFloat(price).toLocaleString(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  }

  return (
    <tr className='stock-table__tr'>
      <td className='stock-table__td'>
        <Link className='stock-table__symbol' to={`/quote/${ticker}`}>
          {ticker}
        </Link>
      </td>
      <td className='stock-table__td'>${priceStr}</td>
      <td className='stock-table__td' style={{ color }}>
        {isPositive && '+'}
        {changesStr}
      </td>
      <td className='stock-table__td' style={{ color }}>
        {changesPercentage}
      </td>
    </tr>
  );
};

export default PriceListItem;
