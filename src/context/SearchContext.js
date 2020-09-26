import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [data, setData] = useState([]);
  const [ticker, setTicker] = useState('');
  const [APIKey] = useState('Tpk_9f992899606244d096283bcf0205cb06');

  return (
    <SearchContext.Provider
      value={{ data, ticker, setData, setTicker, APIKey }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
