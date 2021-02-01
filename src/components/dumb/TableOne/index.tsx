import React from 'react';
import Spinner from '../../Spinner';
import QuoteTableHead from '../TableOneHead';
import QuoteTableRow from '../TableOneRow';
import '../../QuoteTable/quoteTable.css';

interface Props {
  data: any[][];
  rowHeadings: any[];
  headHeadings: any[];
  loading: boolean;
}

const QuoteTable: React.FC<Props> = ({
  data,
  headHeadings,
  rowHeadings,
  loading,
}) => {
  return loading ? (
    <Spinner />
  ) : data.length > 0 ? (
    <table className='quote-table'>
      <QuoteTableHead headings={headHeadings} />
      {/* <QuoteTableBody headings={rowHeading} data={data} /> */}
      <tbody className='quote-table__tbody'>
        {rowHeadings.map((rowHeading, i) => {
          return (
            <QuoteTableRow key={i} rowHeading={rowHeading} rowData={data[i]} />
          );
        })}
      </tbody>
    </table>
  ) : (
    <h3>No Data Available</h3>
  );
};

export default QuoteTable;
