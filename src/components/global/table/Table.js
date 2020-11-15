import React, { useState } from 'react';
import TableNav from './TableNav';
import TableTable from './TableTable';
import TableOptions from './TableOptions';
import Spinner from '../Spinner';
import '../../../css/global/tablePage/tablePage.css';
import { sortData } from '../../../helpers';

const Table = ({
  heading,
  loading,
  tableData,
  setTableData,
  initialSortProperty,
  headings,
}) => {
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(15);

  const sortTableData = (property, reverse) => {
    setTableData((prevData) => {
      const sortedData = [...prevData];
      sortData(sortedData, property, reverse);
      return sortedData;
    });
  };
  // const path = window.location.pathname.replace('/', '');
  // const { initializeTable, tableData, loading } = useContext(TableContext);
  // const [title, setTitle] = useState('');

  // useEffect(() => {
  //   let sortProperty;
  //   let reverse;
  //   if (path === 'cryptocurrencies') {
  //     sortProperty = 'marketCap';
  //     reverse = false;
  //     setTitle('Cryptocurrency Quotes');
  //   } else if (path === 'forex') {
  //     sortProperty = 'name';
  //     reverse = true;
  //     setTitle('Forex Quotes');
  //   } else if (path === 'commodities') {
  //     sortProperty = 'name';
  //     reverse = true;
  //     setTitle('Commodity Quotes');
  //   }
  //   initializeTable(path, sortProperty, reverse);
  //   //eslint-disable-next-line
  // }, [path]);

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
            headings={headings}
            sortTableData={sortTableData}
            initialSortProperty={initialSortProperty}
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
