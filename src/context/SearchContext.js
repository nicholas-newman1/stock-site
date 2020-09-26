import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [text, setText] = useState('');
  const [APIKey] = useState('Tpk_9f992899606244d096283bcf0205cb06');

  return (
    <SearchContext.Provider value={{ text, setText, APIKey }}>
      {props.children}
    </SearchContext.Provider>
  );
};
