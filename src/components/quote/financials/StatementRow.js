import React from 'react';

const StatementRow = ({ label, objectKey, statementData }) => {
  return (
    <tr className='statement-tr'>
      <th className='statement-th-sticky'>{label}</th>
      {statementData.map((item, i) => (
        <td className='statement-td' key={i}>
          {item[objectKey]}
        </td>
      ))}
    </tr>
  );
};

export default StatementRow;
