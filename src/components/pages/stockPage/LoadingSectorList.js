import React from 'react';

const LoadingSectorList = () => {
  const loadingArray = [1, 2, 3, 4, 5];

  return (
    <>
      {loadingArray.map((i) => (
        <tr className='sector-table__tr--loading' key={i}>
          {loadingArray.map((i) => (
            <td className='sector-table__td' key={i}></td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default LoadingSectorList;
