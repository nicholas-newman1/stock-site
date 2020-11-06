import React, { useState, useContext } from 'react';
import { CryptoContext } from '../../context/CryptoContext';
import CryptoSortArrow from './CryptoSortArrow';

const CryptoTableHead = () => {
  const { sortCryptoData } = useContext(CryptoContext);
  const [reverse, setReverse] = useState(false);
  const [currentProperty, setCurrentProperty] = useState('marketCap');

  const headings = [
    {
      property: 'symbol',
      label: 'Symbol',
      sticky: true,
      reverseByDefault: true,
    },
    { property: 'name', label: 'Name', reverseByDefault: true },
    { property: 'price', label: 'Price' },
    { property: 'change', label: 'Change' },
    { property: 'changesPercentage', label: 'Percent Change' },
    { property: 'marketCap', label: 'Market Cap' },
    { property: 'volume', label: 'Volume' },
  ];

  const selectedStyle = {
    textDecoration: 'underline',
  };

  return (
    <thead>
      <tr className='crypto-tr'>
        {headings.map((item) => {
          const { property, label, sticky, reverseByDefault } = item;
          const isSelected = currentProperty === property;
          return (
            <th
              key={property}
              className={sticky ? 'crypto-th-sticky' : 'crypto-th'}
            >
              <button
                className='crypto-th-btn'
                style={isSelected ? selectedStyle : {}}
                onClick={() => {
                  if (isSelected) {
                    sortCryptoData(property, !reverse);
                    setReverse((prevReverse) => !prevReverse);
                  } else {
                    sortCryptoData(property, reverseByDefault);
                    setReverse(reverseByDefault);
                  }
                  setCurrentProperty(property);
                }}
              >
                {label}
                {isSelected && (
                  <CryptoSortArrow
                    style={!reverse ? { transform: 'rotate(180deg)' } : {}}
                  />
                )}
              </button>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default CryptoTableHead;
