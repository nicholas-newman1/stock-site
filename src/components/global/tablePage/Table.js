import React, { useContext } from 'react';
import { TableContext } from '../../../context/TableContext';
import TableHead from './TableHead';
import TableRow from './TableRow';
import '../../../css/global/tablePage/table.css';

const Table = () => {
  const { tableData, page, resultsPerPage } = useContext(TableContext);
  const offset = page * resultsPerPage;
  return (
    <table className='table'>
      <TableHead />
      <tbody>
        {tableData.map((item, i) => {
          const itemInRange = i <= offset + resultsPerPage - 1 && i >= offset;
          return (
            itemInRange && <TableRow key={item.symbol} item={item} index={i} />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
