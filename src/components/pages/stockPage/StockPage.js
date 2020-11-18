import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import BottomNews from '../../global/bottomNews/BottomNews';
import { RealDataContext } from '../../../context/RealDataContext';
import {
  dummyActivesData,
  dummyGainersData,
  dummyLosersData,
} from '../../../dummyData';
import StockTable from './StockTable';
import Sectors from './Sectors';
import './stockPage.css';

const StockPage = () => {
  const [activesData, setActivesData] = useState([]);
  const [activesLoading, setActivesLoading] = useState(false);
  const [gainersData, setGainersData] = useState([]);
  const [gainersLoading, setGainersLoading] = useState(false);
  const [losersData, setLosersData] = useState([]);
  const [losersLoading, setLosersLoading] = useState(false);
  const { realData } = useContext(RealDataContext);

  const fetchActivesData = async () => {
    setActivesLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/actives?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummyActivesData];
    }
    setActivesData(data);
    setActivesLoading(false);
  };

  const fetchGainersData = async () => {
    setGainersLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/gainers?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummyGainersData];
    }
    setGainersData(data);
    setGainersLoading(false);
  };

  const fetchLosersData = async () => {
    setLosersLoading(true);
    let data;
    if (realData) {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/losers?apikey=${process.env.REACT_APP_FMP_KEY}`
      );
      data = await res.json();
    } else {
      data = [...dummyLosersData];
    }
    setLosersData(data);
    setLosersLoading(false);
  };

  useEffect(() => {
    fetchActivesData();
    fetchGainersData();
    fetchLosersData();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Helmet>
        <title>Stock Quotes | Finance App</title>
        <meta
          name='description'
          content='Free stock quotes. Find free stock quotes, forex rates, cryptocurrency prices, and more.'
        />
      </Helmet>

      <div className='stocklists'>
        <div className='stocklist'>
          <h2 className='stockpage__sub-heading'>Losers</h2>
          <StockTable data={activesData} loading={activesLoading} />
        </div>

        <div className='stocklist'>
          <h2 className='stockpage__sub-heading'>Losers</h2>
          <StockTable data={gainersData} loading={gainersLoading} />
        </div>

        <div className='stocklist'>
          <h2 className='stockpage__sub-heading'>Losers</h2>
          <StockTable data={losersData} loading={losersLoading} />
        </div>
      </div>

      <div>
        <h2 className='stockpage__sub-heading'>Sectors</h2>
        <Sectors />
      </div>

      <BottomNews />
    </div>
  );
};

export default StockPage;
