import React, { useState } from 'react';
import { TableProps } from '../../../types/propTypes';
import PageNav from '../PageNav';
import PageOptions from '../PageOptions';
import Table from '../TableOne';
import './tablePaginated.css';

const TablePaginated: React.FC<TableProps> = ({
  data,
  loading,
  horizontal,
}) => {
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const filterRows = (data: any[]) =>
    data.filter((row, i) => {
      const offset = page * resultsPerPage;
      return i <= offset + resultsPerPage - 1 && i >= offset;
    });

  return (
    <div className='table-paginated'>
      <Table
        data={filterRows(data)}
        loading={loading}
        horizontal={horizontal}
      />
      <PageNav
        data={data}
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
