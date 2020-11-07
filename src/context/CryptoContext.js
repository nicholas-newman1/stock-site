import React, { createContext, useState, useContext } from 'react';
import { RealDataContext } from './RealDataContext';
import { dummyCryptoData } from '../dummyData';
import { sortData } from '../helpers';

export const CryptoContext = createContext();

export const CryptoProvider = (props) => {
  const { realData } = useContext(RealDataContext);
  const [cryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(15);
  const [pageBtns, setPageBtns] = useState();
  const [loading, setLoading] = useState(false);

  const fetchCryptoData = async () => {
    let data;
    if (realData) {
      setLoading(true);
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quotes/crypto?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
      setLoading(false);
    } else {
      data = dummyCryptoData;
    }
    sortData(data, 'marketCap');
    setCryptoData(data);
  };

  const sortCryptoData = (property, reverse) => {
    setCryptoData((prevData) => {
      const sortedData = [...prevData];
      sortData(sortedData, property, reverse);
      return sortedData;
    });
  };

  return (
    <CryptoContext.Provider
      value={{
        fetchCryptoData,
        cryptoData,
        sortCryptoData,
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
