import React from 'react';
import './table.css';

export interface TableProps {
  data: any[][];
  horizontal?: boolean;
}

const Table: React.FC<TableProps> = ({ data, horizontal = false }) => {
  return data.length > 0 ? (
    <table className='table'>
      {!horizontal && (
        <thead className='table__thead'>
          <tr className='table__tr'>
            {data[0].map((item, i) => (
              <th
                className={
                  i === 0 && horizontal ? 'table__th-sticky' : 'table__th'
                }
                key={i}
                style={i % 2 === 1 && horizontal ? { background: '#eee' } : {}}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className='table__tbody'>
        {data
          .filter((x, i) => horizontal || i !== 0) // skip first array as it is rendered in the head
          .map((row, i) => (
            <tr
              key={i}
              style={i % 2 === 0 && !horizontal ? { background: '#eee' } : {}}
              className='table__tr'
            >
              {horizontal && (
                <th
                  style={
                    i % 2 === 0 && !horizontal ? { background: '#eee' } : {}
                  }
                  className='table__th-sticky'
                >
                  {row[0]}
                </th>
              )}

              {row
                .filter((x, i) => i !== 0 || !horizontal)
                .map((item, i) => (
                  <td
                    className='table__td'
                    key={i}
                    style={
                      i % 2 === (horizontal ? 0 : 1) && horizontal
                        ? { background: '#eee' }
                        : {}
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

export default Table;
