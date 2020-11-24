import React from 'react';

const LoadingPriceList = () => {
  const loadingItems = [];
  for (let i = 0; i < 4; i++) {
    loadingItems.push(
      <tr className='pricelist__tr--loading' key={i}>
        <td className='pricelist__td'></td>
        <td className='pricelist__td'></td>
        <td className='pricelist__td'></td>
        <td className='pricelist__td'></td>
      </tr>
    );
  }

  return <>{loadingItems}</>;
};

export default LoadingPriceList;
