import React, { useEffect, useState, useContext } from 'react';
import { RealDataContext } from '../../../context/RealDataContext';
import { dummySectorsData } from '../../../dummyData';
import LoadingSectorList from './LoadingSectorList';
import SectorRow from './SectorRow';
import './sectorTable.css';

const Sectors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAllSectors, setShowAllSectors] = useState(false);
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
  return (
    <>
      <table className='sector-table'>
        <thead className='sector-table__thead'>
          <tr className='sector-table__tr'>
            <th className='sector-table__th'>Sector</th>
            <th className='sector-table__th'>Change (%)</th>
          </tr>
        </thead>
        <tbody className='sector-table__tbody'>
          {loading ? (
            <LoadingSectorList />
          ) : (
            data.map(
              (quote, i) =>
                (i < 5 || showAllSectors) && (
                  <SectorRow key={quote.sector} data={quote} />
                )
            )
          )}
        </tbody>
      </table>
      <button
        className='sector-table__btn'
        onClick={() => setShowAllSectors((prev) => !prev)}
      >
        {showAllSectors ? 'Hide All Sectors' : 'Show All Sectors'}
      </button>
    </>
  );
};

export default Sectors;
