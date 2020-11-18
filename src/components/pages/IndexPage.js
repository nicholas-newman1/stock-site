import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Table from '../global/table/Table';
import BottomNews from '../global/bottomNews/BottomNews';
import { RealDataContext } from '../../context/RealDataContext';
import { dummyIndexPageData } from '../../dummyData';

const IndexPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  const fetchIndexData = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/quotes/index?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummyIndexPageData];
    }
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchIndexData();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Helmet>
        <title>Index Quotes | Finance App</title>
        <meta
          name='description'
          content='Free index quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <h1 className='page-heading'>Indexes</h1>

      <Table loading={loading} tableData={data} setTableData={setData} />
      <BottomNews />
    </div>
  );
};

export default IndexPage;
