import React, { createContext, useState } from 'react';

export const RealDataContext = createContext();

export const RealDataProvider = (props) => {
  const [realData, setRealData] = useState(true);
  const [error, setError] = useState(null);
  return (
    <RealDataContext.Provider
      value={{
        realData,
        setRealData,
        error,
        setError,
      }}
    >
      {props.children}
    </RealDataContext.Provider>
  );
};
