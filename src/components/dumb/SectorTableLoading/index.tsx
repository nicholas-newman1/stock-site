import React from 'react';

const SectorTableLoading: React.FC = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <tr className='sector-table__tr--loading' key={i}>
          <td className='sector-table__td'></td>
          <td className='sector-table__td'></td>
        </tr>
      ))}
    </>
  );
};

export default SectorTableLoading;
