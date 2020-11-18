import React from 'react';

const LoadingSectorList = () => {
  const loadingArray = [1, 2, 3, 4];

  return (
    <>
      {loadingArray.map((i) => (
        <tr className='sectoritem' key={i}>
          {loadingArray.map((i) => (
            <td key={i}>
              <div className='sectoritem__loading' />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default LoadingSectorList;
