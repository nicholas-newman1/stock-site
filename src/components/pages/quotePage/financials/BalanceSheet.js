import React, { useEffect } from 'react';
import QuoteTableHead from './QuoteTableHead';
import QuoteTableRow from './QuoteTableRow';
import './quoteTable.css';

const BalanceSheet = ({ statementData }) => {
  // scroll to the left when rendering table
  useEffect(() => {
    document.querySelector('.quote-table').scrollLeft = 0;
  });

  useEffect(() => {
    statementData.map((item) => {
      item.totalCapitalization =
        item.longTermDebt + item.totalStockholdersEquity;
      item.bookValue =
        item.totalStockholdersEquity - item.goodwillAndIntangibleAssets;
      return item;
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h3 className='statement-heading'>Balance Sheet</h3>
      <table className='quote-table'>
        <QuoteTableHead tableData={statementData} />
        <tbody className='quote-tbody'>
          <QuoteTableRow
            label={'Total Assets'}
            objectKey={'totalAssets'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Current Assets'}
            objectKey={'totalCurrentAssets'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Non-Current Assets'}
            objectKey={'totalNonCurrentAssets'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Total Liabilities'}
            objectKey={'totalLiabilities'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Current Liabilities'}
            objectKey={'totalCurrentLiabilities'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Non-Current Liabilities'}
            objectKey={'totalNonCurrentLiabilities'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Total Stockholders Equity'}
            objectKey={'totalStockholdersEquity'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Total Capitalization'}
            objectKey={'totalCapitalization'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Book Value'}
            objectKey={'bookValue'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Total Debt'}
            objectKey={'totalDebt'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Long Term Debt'}
            objectKey={'longTermDebt'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Short Term Debt'}
            objectKey={'shortTermDebt'}
            tableData={statementData}
          />
        </tbody>
      </table>
    </div>
  );
};

export default BalanceSheet;
