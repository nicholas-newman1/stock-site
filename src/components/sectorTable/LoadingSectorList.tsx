import React from 'react';

const LoadingSectorList: React.FC = () => {
  const loadingArray = [1, 2, 3, 4, 5];

  return (
    <>
      {loadingArray.map((i) => (
        <tr className='sector-table__tr--loading' key={i}>
          <td className='sector-table__td'></td>
          <td className='sector-table__td'></td>
        </tr>
      ))}
    </>
  );
};

export default LoadingSectorList;
