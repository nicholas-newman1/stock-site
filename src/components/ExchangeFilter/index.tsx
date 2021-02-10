import React, { useState } from 'react';
import './searchFilter.css';

interface Props {
  setExchange: React.Dispatch<React.SetStateAction<Exchange>>;
}

const ExchangeFilter: React.FC<Props> = ({ setExchange }) => {
  const [checked, setChecked] = useState<Exchange>('');
  const [displayFilter, setDisplayFilter] = useState(false);

  const exchanges: Exchange[] = [
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
    setDisplayFilter(false);
  };

  return (
    <>
      <button
        className='exchange-filter__toggle-btn btn-grey btn--small'
        onClick={() => setDisplayFilter((prev) => !prev)}
      >
        {displayFilter ? 'Hide Filter' : 'Show Filter'}
      </button>

      {displayFilter && (
        <div className='exchange-filter__container'>
          <form className='exchange-filter__form' onSubmit={handleSubmit}>
            <div className='exchange-filter__inputs'>
              {exchanges.map((exchange, i) => (
                <label key={i} className='exchange-filter__label'>
                  <input
                    className='exchange-filter__input'
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

            <button className='btn-blue btn--small' type='submit'>
              Apply
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ExchangeFilter;
