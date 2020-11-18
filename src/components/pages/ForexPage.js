import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../global/table/Table';
import BottomNews from '../global/bottomNews/BottomNews';
import { RealDataContext } from '../../context/RealDataContext';
import { dummyForexData } from '../../dummyData';

const ForexPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  const fetchForexData = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quotes/forex?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummyForexData];
    }
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchForexData();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Helmet>
        <title>Forex Quotes | Finance App</title>
        <meta
          name='description'
          content='Free forex quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <h1 className='page-heading'>Forex</h1>

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews />
    </div>
  );
};

export default ForexPage;
