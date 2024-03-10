import React from 'react';
import { Link } from 'react-router-dom';
import {
  decimalsToRoundTo,
  getChangeColor,
  replaceNullValues,
  roundLocale,
  shortenNumbers,
} from './helpers';

const headings = [
  { property: 'symbol', label: 'Symbol' },
  { property: 'name', label: 'Name' },
  { property: 'price', label: 'Price' },
  { property: 'changesPercentage', label: 'Percent Change (%)' },
  { property: 'change', label: 'Change ($)' },
];

export const properties = headings.map((obj) => obj.property);
export const labels = headings.map((obj) => obj.label);

export const formatData = (data: KeyValueObject[]) => {
  let newData = data.map((item) => {
    item.symbol = (
      <Link className='link' to={`/quote/${item.symbol}`}>
        {item.symbol}
      </Link>
    );
    return item;
  });

  newData = newData.map((item) => {
    const color = getChangeColor(item.change);
    const isPositive = typeof item.change === 'number' && item.change > 0;
    const change = item.change || 0;
    const decimals = decimalsToRoundTo(change);
    return {
      ...item,
      change: (
        <span style={{ color }}>
          {isPositive && '+'}
          {roundLocale(change, decimals, true)}
        </span>
      ),
      changesPercentage: (
        <span style={{ color }}>
          {isPositive && '+'}
          {roundLocale(item.changesPercentage, decimals)}
        </span>
      ),
    };
  });

  // replace null values with N/A and large numbers with shortened versions
  newData = newData.map((item) => shortenNumbers(replaceNullValues(item)));

  /* Creates an array of arrays. Each sub array contains only the properties specified */
  newData = newData.map((obj) => {
    let row: any[] = [];
    for (let key in obj) {
      if (properties.includes(key)) row.push(obj[key]);
    }
    return row;
  });

  newData.unshift([...labels]);

  return newData as any[][];
};
