import React from 'react';

const LoadingPriceList = () => {
  const loadingArray = [1, 2, 3, 4];

  return (
    <>
      {loadingArray.map((i) => (
        <tr key={i}>
          {loadingArray.map((i) => (
            <td key={i}>
              <div className='loading-pricelist-td-content' />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default LoadingPriceList;
