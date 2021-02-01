import React from 'react';

interface Props {
  rowData: any[];
  rowHeading: any;
}

const QuoteTableRow: React.FC<Props> = ({ rowHeading, rowData }) => {
  return (
    <tr className='quote-table__tr'>
      <th className='quote-table__th-sticky'>{rowHeading}</th>
      {rowData.map((item, i) => (
        <td
          className='quote-table__td'
          key={i}
          style={i % 2 === 0 ? { background: '#eee' } : {}}
        >
          {item}
        </td>
      ))}
    </tr>
  );
};

export default QuoteTableRow;
