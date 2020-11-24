import React from 'react';

const QuoteTableRow = ({ label, objectKey, tableData }) => {
  return (
    <tr className='statement__tr'>
      <th className='statement__th-sticky'>{label}</th>
      {tableData.map((item, i) => (
        <td
          className='statement__td'
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
