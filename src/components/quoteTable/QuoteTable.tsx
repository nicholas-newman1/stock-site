import React from 'react';
import QuoteTableHead from './QuoteTableHead';
import QuoteTableRow from './QuoteTableRow';
import './quoteTable.css';

interface Props {
  statementData: KeyValueObject[];
  tableHeadings: TableHeading[];
}

const QuoteTable: React.FC<Props> = ({ statementData, tableHeadings }) => {
  return (
    <table className='quote-table'>
      <QuoteTableHead tableData={statementData} />
      <tbody className='quote-table__tbody'>
        {tableHeadings.map(({ label, property }, i) => (
          <QuoteTableRow
            key={i}
            label={label}
            objectKey={property}
            tableData={statementData}
          />
        ))}
      </tbody>
    </table>
  );
};

export default QuoteTable;
