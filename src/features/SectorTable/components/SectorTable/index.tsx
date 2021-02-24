import React from 'react';
import SectorTableRow from '../SectorTableRow';
import './sectorTable.css';

interface Props {
  data: SectorQuote[];
  loading: boolean;
}

const SectorTable: React.FC<Props> = ({ data }) => {
  return (
    <table className='sector-table'>
      <thead className='sector-table__thead'>
        <tr className='sector-table__tr'>
          <th className='sector-table__th'>Sector</th>
          <th className='sector-table__th'>Change</th>
        </tr>
      </thead>
      <tbody className='sector-table__tbody'>
        {data.map((quote) => (
          <SectorTableRow key={quote.sector} data={quote} />
        ))}
      </tbody>
    </table>
  );
};

export default SectorTable;
