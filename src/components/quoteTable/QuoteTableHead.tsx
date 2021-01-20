import React from 'react';

interface Props {
  tableData: APIObject[];
}

const QuoteTableHead: React.FC<Props> = ({ tableData }) => {
  return (
    <thead className='quote-table__thead'>
      <tr className='quote-table__tr'>
        <th className='quote-table__th-sticky'></th>
        {tableData.map((item, i) => (
          <th
            className='quote-table__th'
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
