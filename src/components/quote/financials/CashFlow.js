import React from 'react';
import StatementRow from './StatementRow';
import '../../../css/quote/statement.css';

const CashFlow = ({ statementData }) => {
  return (
    <div>
      <h3 className='statement-heading'>Cash Flow</h3>
      <table className='statement-table'>
        <thead>
          <tr className='statement-tr'>
            <th className='statement-th-sticky'></th>
            {statementData.map((item) => (
              <th className='statement-th' key={item.date}>
                {item.date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <StatementRow
            label={'Operating Cash Flow'}
            objectKey={'operatingCashFlow'}
            statementData={statementData}
          />
          <StatementRow
            label={'Investing Cash Flow'}
            objectKey={'netCashUsedForInvestingActivites'}
            statementData={statementData}
          />
          <StatementRow
            label={'Financing Cash Flow'}
            objectKey={'netCashUsedProvidedByFinancingActivities'}
            statementData={statementData}
          />
          <StatementRow
            label={'Beginning Cash Position'}
            objectKey={'cashAtBeginningOfPeriod'}
            statementData={statementData}
          />
          <StatementRow
            label={'Change in Cash'}
            objectKey={'netChangeInCash'}
            statementData={statementData}
          />
          <StatementRow
            label={'End Cash Position'}
            objectKey={'cashAtEndOfPeriod'}
            statementData={statementData}
          />
          <StatementRow
            label={'Capital Expenditure'}
            objectKey={'capitalExpenditure'}
            statementData={statementData}
          />
          <StatementRow
            label={'Common Stock Issued'}
            objectKey={'commonStockIssued'}
            statementData={statementData}
          />
          <StatementRow
            label={'Common Stock Repurchased'}
            objectKey={'commonStockRepurchased'}
            statementData={statementData}
          />
          <StatementRow
            label={'Debt Repayment'}
            objectKey={'debtRepayment'}
            statementData={statementData}
          />
          <StatementRow
            label={'Free Cash Flow'}
            objectKey={'freeCashFlow'}
            statementData={statementData}
          />
        </tbody>
      </table>
    </div>
  );
};

export default CashFlow;
