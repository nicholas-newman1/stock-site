import React, { createContext, useState } from 'react';

export const RealDataContext = createContext();

export const RealDataProvider = (props) => {
  const [realData, setRealData] = useState(true);
  return (
    <RealDataContext.Provider
      value={{
        realData,
        setRealData,
      }}
    >
      {props.children}
    </RealDataContext.Provider>
  );
};
