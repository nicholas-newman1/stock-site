import React from 'react';

const TableSortArrow = ({ style }) => {
  return (
    <svg
      className='table-sort-arrow'
      style={style}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' />
    </svg>
  );
};

export default TableSortArrow;