import React from 'react';

const QuoteTableRow = ({ label, objectKey, tableData }) => {
  return (
    <tr className='quote-tr'>
      <th className='quote-th-sticky'>{label}</th>
      {tableData.map((item, i) => (
        <td className='quote-td' key={i}>
          {item[objectKey]}
        </td>
      ))}
    </tr>
  );
};

export default QuoteTableRow;
