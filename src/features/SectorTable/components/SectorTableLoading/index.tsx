import React from 'react';

const SectorTableLoading = () => {
  return (
    <table className='sector-table'>
      <thead className='sector-table__thead'>
        <tr className='sector-table__tr'>
          <th className='sector-table__th'>Sector</th>
          <th className='sector-table__th'>Change</th>
        </tr>
      </thead>
      <tbody className='sector-table__tbody'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
          <tr className='sector-table__tr--loading' key={i}>
            <td className='sector-table__td'></td>
            <td className='sector-table__td'></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SectorTableLoading;
