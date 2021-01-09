import React, { useState, useEffect } from 'react';
import PageNav from '../pageNav/PageNav';
import TableTable from './TableTable';
import TableOptions from './TableOptions';
import { sortData } from '../../helpers';
import Spinner from '../Spinner';

interface Props {
  loading: boolean;
  tableData: Quote[];
  setTableData: React.Dispatch<React.SetStateAction<Quote[]>>;
}

const Table: React.FC<Props> = ({ loading, tableData, setTableData }) => {
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(15);

  // remove any items that don't have a value for price or change
  tableData = tableData.filter((item) => item.price || item.change);

  // sort data by property
  const sortTableData = (property: string, reverse = false) => {
    setTableData((prevData) => sortData(prevData, property, reverse));
  };

  useEffect(() => {
    // once data is fetched, sort by name
    if (tableData.length > 0) sortTableData('name');
    //eslint-disable-next-line
  }, [loading]);

  return loading ? (
    <Spinner />
  ) : tableData.length > 0 ? (
    <div>
      <PageNav
        data={tableData}
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
      <PageNav
        data={tableData}
        page={page}
        setPage={setPage}
        resultsPerPage={resultsPerPage}
      />
      {tableData.length > 5 && (
        <TableOptions
          page={page}
          setPage={setPage}
          resultsPerPage={resultsPerPage}
          setResultsPerPage={setResultsPerPage}
        />
      )}
    </div>
  ) : (
    <h2>No Data Available</h2>
  );
};

export default Table;
