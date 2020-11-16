import React from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import '../../../css/global/table/tabletable.css';

const TableTable = ({ tableData, page, resultsPerPage, sortTableData }) => {
  const offset = page * resultsPerPage;
  return (
    <table className='table'>
      <TableHead sortTableData={sortTableData} />
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

export default TableTable;
