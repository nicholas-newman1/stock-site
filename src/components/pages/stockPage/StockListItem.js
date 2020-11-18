import React from 'react';
import { Link } from 'react-router-dom';

const PriceListItem = ({ data }) => {
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
  if (changes) {
    changes = changes.toLocaleString(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  }

  // limit price decimal places
  if (price) {
    price = parseFloat(price).toLocaleString(undefined, {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    });
  }

  return (
    <tr className='stocktable__tr'>
      <td className='stocktable__td'>
        <Link className='stocktable__symbol' to={`/quote/${ticker}`}>
          {ticker}
        </Link>
      </td>
      <td className='stocktable__td'>${price}</td>
      <td className='stocktable__td' style={{ color }}>
        {isPositive && '+'}
        {changes}
      </td>
      <td className='stocktable__td' style={{ color }}>
        {changesPercentage}
      </td>
    </tr>
  );
};

export default PriceListItem;
