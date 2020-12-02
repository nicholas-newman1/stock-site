import React, { createContext, useState } from 'react';

export const RealDataContext = createContext();

/* The Real Data Context is used to determine whether the site should fetch from
the API or use dummy data. The useFetch custom hook, as well as the fetchQuote
function in QuoteContext check to see if the API returns an error. If this is
the case, realData is set to false and the entire site will use the dummy data
stored in dummyData.js */

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
