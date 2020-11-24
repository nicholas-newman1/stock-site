import React from 'react';

const QuoteTableHead = ({ tableData }) => {
  return (
    <thead className='statement__thead'>
      <tr className='statement__tr'>
        <th className='statement__th-sticky'></th>
        {tableData.map((item, i) => (
          <th
            className='statement__th'
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
