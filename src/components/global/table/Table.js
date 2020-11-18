import React, { useState, useEffect } from 'react';
import TableNav from './TableNav';
import TableTable from './TableTable';
import TableOptions from './TableOptions';
import Spinner from '../Spinner';
import './table.css';
import { sortData } from '../../../helpers';

const Table = ({ heading, loading, tableData, setTableData }) => {
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(15);

  tableData = tableData.filter((item) => item.price || item.change); // remove any items that don't have a value for price or change

  const sortTableData = (property, reverse) => {
    setTableData((prevData) => {
      const sortedData = [...prevData];
      sortData(sortedData, property, reverse);
      return sortedData;
    });
  };

  useEffect(() => {
    if (tableData.length > 0) sortTableData('name');
    //eslint-disable-next-line
  }, [loading]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : tableData.length > 0 ? (
        <div>
          <h1 className='table-heading'>{heading}</h1>
          <TableNav
            tableData={tableData}
            page={page}
            setPage={setPage}
            resultsPerPage={resultsPerPage}
          />
          <TableTable
            tableData={tableData}
            page={page}
            resultsPerPage={resultsPerPage}
            sortTableData={sortTableData}
          />
          <TableOptions
            page={page}
            setPage={setPage}
            resultsPerPage={resultsPerPage}
            setResultsPerPage={setResultsPerPage}
          />
        </div>
      ) : (
        <h2 className='table-no-data'>No Data Available</h2>
      )}
    </>
  );
};

export default Table;
