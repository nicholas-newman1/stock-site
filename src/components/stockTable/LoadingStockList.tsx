import React from 'react';

const LoadingStockList: React.FC = () => {
  const loadingArray = [1, 2, 3, 4];

  return (
    <>
      {loadingArray.map((i) => (
        <tr className='stock-table__tr--loading' key={i}>
          {loadingArray.map((i) => (
            <td className='stock-table__td' key={i}></td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default LoadingStockList;
