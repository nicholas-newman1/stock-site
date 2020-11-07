import React, { useContext } from 'react';
import { TableContext } from '../../../context/TableContext';
import TableSortArrow from './TableSortArrow';

const TableHead = () => {
  const {
    sortTableData,
    path,
    sortProperty,
    setSortProperty,
    reverse,
    setReverse,
  } = useContext(TableContext);

  const cryptoHeadings = [
    {
      property: 'symbol',
      label: 'Symbol',
      sticky: true,
      reverseByDefault: true,
    },
    { property: 'name', label: 'Name', reverseByDefault: true },
    { property: 'price', label: 'Price' },
    { property: 'change', label: 'Change' },
    { property: 'changesPercentage', label: 'Percent Change' },
    { property: 'marketCap', label: 'Market Cap' },
  ];

  const forexHeadings = [
    {
      property: 'symbol',
      label: 'Symbol',
      sticky: true,
      reverseByDefault: true,
    },
    { property: 'name', label: 'Name', reverseByDefault: true },
    { property: 'price', label: 'Price' },
    { property: 'change', label: 'Change' },
    { property: 'changesPercentage', label: 'Percent Change' },
  ];

  const commodityHeadings = [
    {
      property: 'symbol',
      label: 'Symbol',
      sticky: true,
      reverseByDefault: true,
    },
    { property: 'name', label: 'Name', reverseByDefault: true },
    { property: 'price', label: 'Price' },
    { property: 'change', label: 'Change' },
    { property: 'changesPercentage', label: 'Percent Change' },
  ];

  let headings = [];
  if (path === 'cryptocurrencies') headings = cryptoHeadings;
  if (path === 'forex') headings = forexHeadings;
  if (path === 'commodities') headings = commodityHeadings;

  return (
    <thead>
      <tr className='table-tr'>
        {headings.map((item) => {
          const { property, label, sticky, reverseByDefault } = item;
          const isSelected = sortProperty === property;
          return (
            <th
              key={property}
              className={sticky ? 'table-th-sticky' : 'table-th'}
            >
              <button
                className='table-th-btn'
                style={isSelected ? { textDecoration: 'underline' } : {}}
                onClick={() => {
                  if (isSelected) {
                    sortTableData(property, !reverse);
                    setReverse((prevReverse) => !prevReverse);
                  } else {
                    sortTableData(property, reverseByDefault);
                    setReverse(reverseByDefault);
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
