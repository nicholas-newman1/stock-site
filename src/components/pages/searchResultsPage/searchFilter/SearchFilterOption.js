import React from 'react';

const SearchFilterOption = ({ checked, setChecked, exchange }) => {
  const handleChange = (exchange) => {
    setChecked(checked === exchange ? '' : exchange);
  };

  return (
    <label className='search-filter__label'>
      <input
        className='search-filter__input'
        type='checkbox'
        value={exchange}
        checked={checked === exchange}
        onChange={() => handleChange(exchange)}
      />
      {exchange}
    </label>
  );
};

export default SearchFilterOption;
