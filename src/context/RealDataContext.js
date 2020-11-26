import React, { createContext, useState } from 'react';

export const RealDataContext = createContext();

export const RealDataProvider = (props) => {
  const [realData, setRealData] = useState(false);
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
