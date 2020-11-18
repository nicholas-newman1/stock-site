import React from 'react';
import { Link } from 'react-router-dom';

const PriceListItem = ({ data }) => {
  let { sector, changesPercentage } = data;
  const color = changesPercentage.charAt(0) !== '-' ? 'green' : '#de0e00';
  const isPositive = changesPercentage.charAt(0) !== '-';

  return (
    <tr className='sector-table__tr'>
      <td className='sector-table__td'>{sector}</td>
      <td className='sector-table__td' style={{ color }}>
        {isPositive && '+'}
        {changesPercentage}
      </td>
    </tr>
  );
};

export default PriceListItem;
