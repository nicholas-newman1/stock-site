import React from 'react';

const QuoteTableRow = ({ label, objectKey, tableData }) => {
  return (
    <tr className='quote-table__tr'>
      <th className='quote-table__th-sticky'>{label}</th>
      {tableData.map((item, i) => (
        <td
          className='quote-table__td'
          key={i}
          style={i % 2 === 0 ? { background: '#eee' } : {}}
        >
          {item[objectKey]}
        </td>
      ))}
    </tr>
  );
};

export default QuoteTableRow;
