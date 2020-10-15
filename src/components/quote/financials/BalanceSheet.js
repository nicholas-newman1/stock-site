import React from 'react';
import StatementRow from './StatementRow';
import '../../../css/quote/statement.css';

const BalanceSheet = ({ statementData }) => {
  return (
    <div>
      <h3 className='statement-heading'>Balance Sheet</h3>
      <table className='statement-table'>
        <thead className='statement-thead'>
          <tr className='statement-tr'>
            <th className='statement-th-sticky'></th>
            {statementData.map((item) => (
              <th className='statement-th' key={item.date}>
                {item.date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='statement-tbody'>
          <StatementRow
            label={'Total Assets'}
            objectKey={'totalAssets'}
            statementData={statementData}
          />
          <StatementRow
            label={'Current Assets'}
            objectKey={'totalCurrentAssets'}
            statementData={statementData}
          />
          <StatementRow
            label={'Non-Current Assets'}
            objectKey={'totalNonCurrentAssets'}
            statementData={statementData}
          />
          <StatementRow
            label={'Total Liabilities'}
            objectKey={'totalLiabilities'}
            statementData={statementData}
          />
          <StatementRow
            label={'Current Liabilities'}
            objectKey={'totalCurrentLiabilities'}
            statementData={statementData}
          />
          <StatementRow
            label={'Non-Current Liabilities'}
            objectKey={'totalNonCurrentLiabilities'}
            statementData={statementData}
          />
          <StatementRow
            label={'Total Stockholders Equity'}
            objectKey={'totalStockholdersEquity'}
            statementData={statementData}
          />
          <StatementRow
            label={'Total Capitalization'}
            objectKey={'totalCapitalization'}
            statementData={statementData}
          />
          <StatementRow
            label={'Book Value'}
            objectKey={'bookValue'}
            statementData={statementData}
          />
          <StatementRow
            label={'Total Debt'}
            objectKey={'totalDebt'}
            statementData={statementData}
          />
          <StatementRow
            label={'Long Term Debt'}
            objectKey={'longTermDebt'}
            statementData={statementData}
          />
          <StatementRow
            label={'Short Term Debt'}
            objectKey={'shortTermDebt'}
            statementData={statementData}
          />
        </tbody>
      </table>
    </div>
  );
};

export default BalanceSheet;
