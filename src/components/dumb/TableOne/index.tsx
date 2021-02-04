import React from 'react';
import Spinner from '../Spinner';
import './tableOne.css';

interface TableOptions {
  skipFirstHeading?: boolean;
  columnEmphasis?: boolean;
}

interface Props {
  data: any[][];
  rowHeadings: any[];
  headHeadings: any[];
  loading: boolean;
  options?: TableOptions;
}

const TableOne: React.FC<Props> = ({
  data,
  headHeadings,
  rowHeadings,
  loading,
  options: { skipFirstHeading, columnEmphasis } = {
    skipFirstHeading: false,
    columnEmphasis: false,
  },
}) => {
  const isRowHeadings = rowHeadings.length > 0;

  return loading ? (
    <Spinner />
  ) : data.length > 0 ? (
    <table className='table-one'>
      <thead className='table-one__thead'>
        <tr className='table-one__tr'>
          {skipFirstHeading && <th className='table-one__th-sticky'></th>}

          {headHeadings.map((item, i) => (
            <th
              className={
                i === 0 && !skipFirstHeading
                  ? 'table-one__th-sticky'
                  : 'table-one__th'
              }
              key={i}
              style={
                i % 2 === (skipFirstHeading ? 0 : 1) && columnEmphasis
                  ? { background: '#eee' }
                  : {}
              }
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='table-one__tbody'>
        {(isRowHeadings ? rowHeadings : data).map((rowHeading, i) => (
          <tr
            key={i}
            style={i % 2 === 0 && !columnEmphasis ? { background: '#eee' } : {}}
            className='table-one__tr'
          >
            {isRowHeadings && (
              <th
                style={
                  i % 2 === 0 && !columnEmphasis ? { background: '#eee' } : {}
                }
                className='table-one__th-sticky'
              >
                {rowHeading}
              </th>
            )}
            {data[i].map((item, i) => (
              <td
                className='table-one__td'
                key={i}
                style={
                  i % 2 === 0 && columnEmphasis ? { background: '#eee' } : {}
                }
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

export default TableOne;
