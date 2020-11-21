import React, { useState } from 'react';
import { dummySectorsData } from '../../../dummyData';
import LoadingSectorList from './LoadingSectorList';
import SectorRow from './SectorRow';
import './sectorTable.css';
import useFetchAndSet from '../../../hooks/useFetchAndSet';

const Sectors = () => {
  const [showAllSectors, setShowAllSectors] = useState(false);
  const { data, loading } = useFetchAndSet(
    [],
    'sectors-performance',
    dummySectorsData
  );

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
