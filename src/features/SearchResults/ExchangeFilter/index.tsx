import React, { useState } from 'react';
import './searchFilter.css';

// what is this components concern?
// should it have an apply button?
// class/file names need to be fixed

type Props<T> = {
  filters: T[];
  setFilter: (filter: T) => void;
};

const ExchangeFilter = <T extends string>({ filters, setFilter }: Props<T>) => {
  const [checked, setChecked] = useState<T>('' as T);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter(checked);
  };

  return (
    <div className='exchange-filter__container'>
      <form className='exchange-filter__form' onSubmit={handleSubmit}>
        <div className='exchange-filter__inputs'>
          {filters.map((filter, i) => (
            <label key={i} className='exchange-filter__label'>
              <input
                className='exchange-filter__input'
                type='radio'
                value={filter}
                checked={checked === filter}
                onChange={() =>
                  setChecked(checked === filter ? ('' as T) : filter)
                }
              />
              {filter}
            </label>
          ))}
        </div>

        <button className='btn btn-blue btn-small' type='submit'>
          Apply
        </button>
      </form>
    </div>
  );
};

export default ExchangeFilter;
