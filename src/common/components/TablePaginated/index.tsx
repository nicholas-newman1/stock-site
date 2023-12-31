import React, { useState } from 'react';
import PageNav from '../PageNav';
import PageOptions from '../PageOptions';
import Table, { TableProps } from '../Table';
import './tablePaginated.css';

const TablePaginated: React.FC<TableProps> = ({ data, horizontal }) => {
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const filterRows = (data: any[]) => {
    if (!horizontal && page > 0) {
      let newData = data.filter((row, i) => {
        const offset = page * resultsPerPage;
        return i <= offset + resultsPerPage - 2 && i >= offset;
      });
      newData.unshift(data[0]);
      return newData;
    }
    return data.filter((row, i) => {
      const offset = page * resultsPerPage;
      return i <= offset + resultsPerPage - 1 && i >= offset;
    });
  };

  return (
    <div className='table-paginated'>
      <PageNav
        length={data.length}
        page={page}
        setPage={setPage}
        resultsPerPage={resultsPerPage}
      />
      <Table data={filterRows(data)} horizontal={horizontal} />
      <PageNav
        length={data.length}
        page={page}
        setPage={setPage}
        resultsPerPage={resultsPerPage}
      />
      {data.length > 5 && (
        <PageOptions
          page={page}
          setPage={setPage}
          resultsPerPage={resultsPerPage}
          setResultsPerPage={setResultsPerPage}
        />
      )}
    </div>
  );
};

export default TablePaginated;
