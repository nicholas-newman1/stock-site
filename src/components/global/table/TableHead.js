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

  return (
    <thead>
      <tr className='table-tr'>
        {headings.map((item, i) => {
          const { property, label } = item;
          const isSelected = sortProperty === property;
          return (
            <th
              key={property}
              className={i === 0 ? 'table-th-sticky' : 'table-th'}
            >
              <button
                className='table-th-btn'
                style={isSelected ? { textDecoration: 'underline' } : {}}
                onClick={() => {
                  if (isSelected) {
                    sortTableData(property, !reverse);
                    setReverse((prevReverse) => !prevReverse);
                  } else {
                    sortTableData(property, false);
                    setReverse(false);
                  }
                  setSortProperty(property);
                }}
              >
                {label}
                {isSelected && (
                  <TableSortArrow
                    style={!reverse ? { transform: 'rotate(180deg)' } : {}}
                  />
                )}
              </button>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
