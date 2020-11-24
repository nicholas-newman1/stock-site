import React from 'react';

const QuoteTableHead = ({ tableData }) => {
  return (
    <thead className='quote-thead'>
      <tr className='quote-tr'>
        <th className='quote-th-sticky'></th>
        {tableData.map((item, i) => (
          <th
            className='quote-th'
            key={item.date}
            style={i % 2 === 0 ? { background: '#eee' } : {}}
          >
            {item.date}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default QuoteTableHead;
