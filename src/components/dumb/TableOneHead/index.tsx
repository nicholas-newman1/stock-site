import React from 'react';

interface Props {
  headings: any[];
}

const QuoteTableHead: React.FC<Props> = ({ headings }) => {
  return (
    <thead className='quote-table__thead'>
      <tr className='quote-table__tr'>
        <th className='quote-table__th-sticky'></th>
        {headings.map((item, i) => (
          <th
            className='quote-table__th'
            key={i}
            style={i % 2 === 0 ? { background: '#eee' } : {}}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default QuoteTableHead;
