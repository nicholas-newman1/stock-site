import React from 'react';

const SectorTableLoading: React.FC = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
        <tr className='sector-table__tr--loading' key={i}>
          <td className='sector-table__td'></td>
          <td className='sector-table__td'></td>
        </tr>
      ))}
    </>
  );
};

export default SectorTableLoading;
