import React, { useState } from 'react';
import './searchFilter.css';

const SearchResultsFilter = ({ setExchange }) => {
  const [checked, setChecked] = useState('');
  const [displayFilter, setDisplayFilter] = useState(false);

  const exchanges = [
    'INDEX',
    'MUTUAL_FUND',
    'NASDAQ',
    'ETF',
    'COMMODITY',
    'CRYPTO',
    'FOREX',
    'TSX',
    'AMEX',
    'NYSE',
    'EURONEXT',
  ];

  return (
    <>
      <button
        className='search-filter__toggle search-filter__btn'
        onClick={() => setDisplayFilter((prev) => !prev)}
      >
        {displayFilter ? 'Hide Filter' : 'Filter Results'}
      </button>
      <hr className='search-filter__hr' />
      {displayFilter && (
        <div className='search-filter__container'>
          <h2 className='search-filter__header'>Filter Exchange</h2>
          <form
            className='search-filter__form'
            onSubmit={(e) => {
              e.preventDefault();
              setExchange(checked);
            }}
          >
            <div className='search-filter__inputs'>
              {exchanges.map((exchange, i) => (
                <label className='search-filter__label' key={i}>
                  <input
                    className='search-filter__input'
                    type='checkbox'
                    value={exchange}
                    checked={checked === exchange}
                    onChange={() =>
                      setChecked(checked === exchange ? '' : exchange)
                    }
                  />
                  {exchange}
                </label>
              ))}
            </div>

            <button className='search-filter__btn submit' type='submit'>
              Apply
            </button>
          </form>
          <hr className='search-filter__hr' />
        </div>
      )}
    </>
  );
};

export default SearchResultsFilter;
