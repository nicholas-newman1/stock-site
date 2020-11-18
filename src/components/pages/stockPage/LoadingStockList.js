import React from 'react';

const LoadingPriceList = () => {
  const loadingArray = [1, 2, 3, 4];

  return (
    <>
      {loadingArray.map((i) => (
        <tr className='stockitem' key={i}>
          {loadingArray.map((i) => (
            <td key={i}>
              <div className='stockitem__loading' />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default LoadingPriceList;
