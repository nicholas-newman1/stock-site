import React, { useState } from 'react';
import TableSortArrow from './TableSortArrow';

const TableHead = ({ sortTableData }) => {
  const [reverse, setReverse] = useState(false);
  const [sortProperty, setSortProperty] = useState('name');

  const headings = [
    { property: 'symbol', label: 'Symbol' },
    { property: 'name', label: 'Name' },
    { property: 'price', label: 'Price' },
    { property: 'change', label: 'Change' },
    { property: 'changesPercentage', label: 'Percent Change' },
  ];

  const handleClick = (property) => {
    sortTableData(property, !reverse);
    setReverse((prevReverse) => !prevReverse);
    setSortProperty(property);
  };

  return (
    <thead>
      <tr className='table__tr'>
        {headings.map(({ property, label }, i) => {
          const isCurrentSort = sortProperty === property;

          return (
            <th
              key={property}
              className={i === 0 ? 'table__th-sticky' : 'table__th'}
              style={isCurrentSort ? { textDecoration: 'underline' } : {}}
              onClick={() => handleClick(property)}
              tabIndex={0}
            >
              {label}
              {isCurrentSort && (
                <TableSortArrow
                  style={!reverse ? { transform: 'rotate(180deg)' } : {}}
                />
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
