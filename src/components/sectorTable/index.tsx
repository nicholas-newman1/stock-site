import React, { useState } from 'react';
import { dummySectorsData } from '../../utils/dummyData';
import LoadingSectorList from '../SectorTableLoading';
import SectorRow from '../SectorTableRow';
import './sectorTable.css';
import useFetch from '../../hooks/useFetch';

const Sectors = () => {
  const [showAllSectors, setShowAllSectors] = useState(false);
  const { data, loading } = useFetch(
    [], // intial value
    'sectors-performance', // endpoint
    dummySectorsData // dummy data
  );

  return (
    <>
      <table className='sector-table'>
        <thead className='sector-table__thead'>
          <tr className='sector-table__tr'>
            <th className='sector-table__th'>Sector</th>
            <th className='sector-table__th'>Change</th>
          </tr>
        </thead>
        <tbody className='sector-table__tbody'>
          {loading ? (
            <LoadingSectorList />
          ) : (
            data.map(
              (quote: SectorQuote, i: number) =>
                (i < 14 || showAllSectors) && (
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
        {showAllSectors ? 'Hide Sectors' : 'Show All Sectors'}
      </button>
    </>
  );
};

export default Sectors;
