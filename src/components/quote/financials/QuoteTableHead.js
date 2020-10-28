import React from 'react';

const QuoteTableHead = ({ tableData }) => {
  return (
    <thead className='quote-thead'>
      <tr className='quote-tr'>
        <th className='quote-th-sticky'></th>
        {tableData.map((item) => (
          <th className='quote-th' key={item.date}>
            {item.date}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default QuoteTableHead;
