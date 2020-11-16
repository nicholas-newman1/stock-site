import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from './global/table/Table';
import BottomNews from './global/bottomNews/BottomNews';
import { RealDataContext } from '../context/RealDataContext';
import { dummyCryptoData } from '../dummyData';

const CommodityPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  const fetchCommodityData = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quotes/commodity?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummyCryptoData];
    }
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCommodityData();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Helmet>
        <title>Commodity Quotes | Finance App</title>
        <meta
          name='description'
          content='Free commodity quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>
      <Table
        heading='commodities'
        loading={loading}
        tableData={data}
        setTableData={setData}
      />
      <BottomNews />
    </div>
  );
};

export default CommodityPage;
