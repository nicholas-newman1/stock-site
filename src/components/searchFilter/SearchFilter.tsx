import React, { useState } from 'react';
import SearchFilterBtn from './SearchFilterBtn';
import './searchFilter.css';
import SearchFilterOption from './SearchFilterOption';

interface Props {
  setExchange: React.Dispatch<React.SetStateAction<Exchange>>;
}

const SearchResultsFilter: React.FC<Props> = ({ setExchange }) => {
  const [checked, setChecked] = useState<Exchange>('');
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setExchange(checked);
  };

  return (
    <>
      <SearchFilterBtn
        displayFilter={displayFilter}
        setDisplayFilter={setDisplayFilter}
      />

      <hr className='search-filter__hr' />

      {displayFilter && (
        <div className='search-filter__container'>
          <form className='search-filter__form' onSubmit={handleSubmit}>
            <div className='search-filter__inputs'>
              {exchanges.map((exchange, i) => (
                <SearchFilterOption
                  key={i}
                  checked={checked}
                  setChecked={setChecked}
                  exchange={exchange as Exchange}
                />
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
