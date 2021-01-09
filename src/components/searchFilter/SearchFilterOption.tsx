import React from 'react';

interface Props {
  checked: Exchange;
  setChecked: React.Dispatch<React.SetStateAction<Exchange>>;
  exchange: Exchange;
}

const SearchFilterOption: React.FC<Props> = ({
  checked,
  setChecked,
  exchange,
}) => {
  const handleChange = () => {
    setChecked(checked === exchange ? '' : exchange);
  };

  return (
    <label className='search-filter__label'>
      <input
        className='search-filter__input'
        type='checkbox'
        value={exchange}
        checked={checked === exchange}
        onChange={handleChange}
      />
      {exchange}
    </label>
  );
};

export default SearchFilterOption;
