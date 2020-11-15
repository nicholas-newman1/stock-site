import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { sortData } from '../helpers';
import Table from './global/table/Table';
import BottomNews from './global/bottomNews/BottomNews';
import { RealDataContext } from '../context/RealDataContext';
import { dummyForexData } from '../dummyData';

const ForexPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  const fetchForexData = async () => {
    let data;
    if (realData) {
      setLoading(true);
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quotes/forex?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
      setLoading(false);
    } else {
      data = [...dummyForexData];
    }

    sortData(data, 'name');
    setData(data);
  };

  useEffect(() => {
    fetchForexData();
    //eslint-disable-next-line
  }, []);

  const forexHeadings = [
    { property: 'symbol', label: 'Symbol' },
    { property: 'name', label: 'Name' },
    { property: 'price', label: 'Price' },
    { property: 'change', label: 'Change' },
    { property: 'changesPercentage', label: 'Percent Change' },
  ];

  return (
    <div>
      <Helmet>
        <title>Forex Quotes | Finance App</title>
        <meta
          name='description'
          content='Free forex quotes. Find free stock quotes, forex exchange rates, cryptoitem rates, and more.'
        />
      </Helmet>
      <Table
        heading='forex'
        loading={loading}
        tableData={data}
        headings={forexHeadings}
        setTableData={setData}
        initialSortProperty='name'
      />
      <BottomNews />
    </div>
  );
};

export default ForexPage;
