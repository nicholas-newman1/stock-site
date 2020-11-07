import React, { createContext, useState, useContext, useEffect } from 'react';
import { RealDataContext } from './RealDataContext';
import {
  dummyCryptoData,
  dummyForexData,
  dummyCommodityData,
} from '../dummyData';
import { sortData } from '../helpers';

export const TableContext = createContext();

export const TableProvider = (props) => {
  const { realData } = useContext(RealDataContext);
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(15);
  const [path, setPath] = useState('');
  const [sortProperty, setSortProperty] = useState('');
  const [reverse, setReverse] = useState(false);
  const [loading, setLoading] = useState(false);

  const initializeTable = async (path, sortProperty = '', reverse = false) => {
    setPath(path);
    setSortProperty(sortProperty);
    setReverse(reverse);
  };

  const fetchTableData = async () => {
    let data;
    if (realData) {
      let endpoint;
      if (path === 'cryptocurrencies') endpoint = 'crypto';
      if (path === 'forex') endpoint = 'forex';
      if (path === 'commodities') endpoint = 'commodity';
      setLoading(true);
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quotes/${endpoint}?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
      setLoading(false);
    } else {
      if (path === 'cryptocurrencies') data = dummyCryptoData;
      if (path === 'forex') data = dummyForexData;
      if (path === 'commodities') data = dummyCommodityData;
    }
    sortData(data, sortProperty, reverse);
    setTableData(data);
  };

  useEffect(() => {
    if (sortProperty) fetchTableData();
    //eslint-disable-next-line
  }, [sortProperty, path]);

  const sortTableData = (property, reverse) => {
    setTableData((prevData) => {
      const sortedData = [...prevData];
      sortData(sortedData, property, reverse);
      return sortedData;
    });
  };

  return (
    <TableContext.Provider
      value={{
        initializeTable,
        fetchTableData,
        tableData,
        sortTableData,
        page,
        setPage,
        resultsPerPage,
        setResultsPerPage,
        loading,
        path,
        sortProperty,
        setSortProperty,
        reverse,
        setReverse,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
