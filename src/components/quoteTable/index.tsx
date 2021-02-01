import React from 'react';
import QuoteTableHead from '../QuoteTableHead';
import QuoteTableRow from '../QuoteTableRow';
import Spinner from '../Spinner';
import './quoteTable.css';

interface Props {
  data: KeyValueObject[];
  headings: TableHeading[];
  loading: boolean;
}

const QuoteTable: React.FC<Props> = ({ data, headings, loading }) => {
  return loading ? (
    <Spinner />
  ) : data.length > 0 ? (
    <table className='quote-table'>
      <QuoteTableHead tableData={data} />
      <tbody className='quote-table__tbody'>
        {headings.map(({ label, property }, i) => (
          <QuoteTableRow
            key={i}
            label={label}
            objectKey={property}
            tableData={data}
          />
        ))}
      </tbody>
    </table>
  ) : (
    <h3>No Data Available</h3>
  );
};

export default QuoteTable;
