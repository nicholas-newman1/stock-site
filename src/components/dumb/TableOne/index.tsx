import React from 'react';
import Spinner from '../Spinner';
import './tableOne.css';

interface Props {
  data: any[][];
  rowHeadings: any[];
  headHeadings: any[];
  loading: boolean;
}

const QuoteTable: React.FC<Props> = ({
  data,
  headHeadings,
  rowHeadings,
  loading,
}) => {
  return loading ? (
    <Spinner />
  ) : data.length > 0 ? (
    <table className='table-one'>
      <thead className='table-one__thead'>
        <tr className='table-one__tr'>
          <th className='table-one__th-sticky'></th>
          {headHeadings.map((item, i) => (
            <th
              className='table-one__th'
              key={i}
              style={i % 2 === 0 ? { background: '#eee' } : {}}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='table-one__tbody'>
        {rowHeadings.map((rowHeading, i) => (
          <tr className='table-one__tr'>
            <th className='table-one__th-sticky'>{rowHeading}</th>
            {data[i].map((item, i) => (
              <td
                className='table-one__td'
                key={i}
                style={i % 2 === 0 ? { background: '#eee' } : {}}
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h3>No Data Available</h3>
  );
};

export default QuoteTable;
