import React from 'react';

interface Props {
  data: SectorQuote;
}

const PriceListItem: React.FC<Props> = ({ data }) => {
  let { sector, changesPercentage } = data;
  const changesNum = parseFloat(changesPercentage);
  const color = changesNum > 0 ? 'green' : changesNum < 0 ? '#de0e00' : 'black';
  const isPositive = changesNum > 0;

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
