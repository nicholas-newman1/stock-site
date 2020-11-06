import React, { createContext, useState, useContext } from 'react';
import { RealDataContext } from './RealDataContext';
import { dummyCryptoData } from '../components/dummyData';

export const CryptoContext = createContext();

export const CryptoProvider = (props) => {
  const { realData } = useContext(RealDataContext);
  const [cryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [pageBtns, setPageBtns] = useState();
  const [loading, setLoading] = useState(false);

  const fetchCryptoData = async () => {
    if (realData) {
      setLoading(true);
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      const data = await res.json();
      setCryptoData(data);
      setLoading(false);
    } else {
      setCryptoData(dummyCryptoData);
    }
  };

  return (
    <CryptoContext.Provider
      value={{
        fetchCryptoData,
        cryptoData,
        page,
        setPage,
        resultsPerPage,
        setResultsPerPage,
        pageBtns,
        setPageBtns,
        loading,
      }}
    >
      {props.children}
    </CryptoContext.Provider>
  );
};
