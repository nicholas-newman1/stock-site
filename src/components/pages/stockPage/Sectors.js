import React, { useEffect, useState, useContext } from 'react';
import { RealDataContext } from '../../../context/RealDataContext';
import { dummySectorsData } from '../../../dummyData';

const Sectors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  const fetchSectorData = async () => {
    setLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/sectors-performance?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummySectorsData];
    }
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSectorData();
    //eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Sectors;
