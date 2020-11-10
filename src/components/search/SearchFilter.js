import React, { useState } from 'react';
import '../../css/search/searchFilter.css';

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
        className='search-filter-toggle search-filter-btn'
        onClick={() => setDisplayFilter((prev) => !prev)}
      >
        {displayFilter ? 'Hide Filter' : 'Filter Results'}
      </button>
      <hr className='search-filter-hr' />
      {displayFilter && (
        <div className='search-filter-container'>
          <h2 className='search-filter-header'>Filter Results</h2>
          <form
            className='search-filter-form'
            onSubmit={(e) => {
              e.preventDefault();
              setExchange(checked);
            }}
          >
            <div className='search-filter-inputs'>
              {exchanges.map((exchange, i) => (
                <label className='search-filter-label' key={i}>
                  <input
                    className='search-filter-input'
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

            <button className='search-filter-btn submit' type='submit'>
              Apply
            </button>
          </form>
          <hr className='search-filter-hr' />
        </div>
      )}
    </>
  );
};

export default SearchResultsFilter;
