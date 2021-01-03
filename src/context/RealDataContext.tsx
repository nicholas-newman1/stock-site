import React, { createContext, useState } from 'react';

interface RealDataContextInterface {
  realData: boolean;
  setRealData: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const RealDataContext = createContext<RealDataContextInterface>(
  {} as RealDataContextInterface
);

/* The Real Data Context is used to determine whether the site should fetch from
the API or use dummy data. The useFetch custom hook, as well as the fetchQuote
function in QuoteContext check to see if the API returns an error. If this is
the case, realData is set to false and the entire site will use the dummy data
stored in dummyData.js */

export const RealDataProvider: React.FC = (props) => {
  const [realData, setRealData] = useState(false);
  const [error, setError] = useState('');
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
