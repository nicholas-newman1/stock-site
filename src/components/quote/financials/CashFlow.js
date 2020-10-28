import React, { useEffect } from 'react';
import QuoteTableHead from './QuoteTableHead';
import QuoteTableRow from './QuoteTableRow';
import '../../../css/quote/quoteTable.css';

const CashFlow = ({ statementData }) => {
  // scroll to the left when rendering table
  useEffect(() => {
    document.querySelector('.quote-table').scrollLeft = 0;
  });

  return (
    <div>
      <h3 className='statement-heading'>Cash Flow</h3>
      <table className='quote-table'>
        <QuoteTableHead tableData={statementData} />
        <tbody className='quote-tbody'>
          <QuoteTableRow
            label={'Operating Cash Flow'}
            objectKey={'operatingCashFlow'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Investing Cash Flow'}
            objectKey={'netCashUsedForInvestingActivites'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Financing Cash Flow'}
            objectKey={'netCashUsedProvidedByFinancingActivities'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Beginning Cash Position'}
            objectKey={'cashAtBeginningOfPeriod'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Change in Cash'}
            objectKey={'netChangeInCash'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'End Cash Position'}
            objectKey={'cashAtEndOfPeriod'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Capital Expenditure'}
            objectKey={'capitalExpenditure'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Common Stock Issued'}
            objectKey={'commonStockIssued'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Common Stock Repurchased'}
            objectKey={'commonStockRepurchased'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Debt Repayment'}
            objectKey={'debtRepayment'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Free Cash Flow'}
            objectKey={'freeCashFlow'}
            tableData={statementData}
          />
        </tbody>
      </table>
    </div>
  );
};

export default CashFlow;
