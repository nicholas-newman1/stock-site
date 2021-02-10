import React, { useState } from 'react';
import ExchangeFilterBtn from '../ExchangeFilterBtn';
import ExchangeFilterOption from '../ExchangeFilterOption';
import './searchFilter.css';

interface Props {
  setExchange: React.Dispatch<React.SetStateAction<Exchange>>;
}

const ExchangeFilter: React.FC<Props> = ({ setExchange }) => {
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
      <ExchangeFilterBtn
        displayFilter={displayFilter}
        setDisplayFilter={setDisplayFilter}
      />

      {displayFilter && (
        <div className='exchange-filter__container'>
          <form className='exchange-filter__form' onSubmit={handleSubmit}>
            <div className='exchange-filter__inputs'>
              {exchanges.map((exchange, i) => (
                <ExchangeFilterOption
                  key={i}
                  checked={checked}
                  setChecked={setChecked}
                  exchange={exchange as Exchange}
                />
              ))}
            </div>

            <button className='exchange-filter__btn submit' type='submit'>
              Apply
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ExchangeFilter;
