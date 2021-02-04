import React, { useState } from 'react';
import PageNav from '../PageNav';
import PageOptions from '../PageOptions';
import Table from '../TableOne';
import './tablePaginated.css';

// repeated
interface TableOptions {
  skipFirstHeading?: boolean;
  columnEmphasis?: boolean;
}

interface Props {
  data: any[][];
  rowHeadings: any[];
  headHeadings: any[];
  loading: boolean;
  options?: TableOptions;
}

const TablePaginated: React.FC<Props> = ({
  data,
  headHeadings,
  rowHeadings,
  loading,
  options = {
    skipFirstHeading: false,
    columnEmphasis: false,
  },
}) => {
  const [page, setPage] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(5);

  const filterRows = (data: any[]) =>
    data.filter((row, i) => {
      const offset = page * resultsPerPage;
      return i <= offset + resultsPerPage - 1 && i >= offset;
    });

  return (
    <div className='table-paginated'>
      <Table
        data={filterRows(data)}
        headHeadings={headHeadings}
        rowHeadings={filterRows(rowHeadings)}
        loading={loading}
        options={options}
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
