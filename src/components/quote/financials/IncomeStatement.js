import React from 'react';
import StatementRow from './StatementRow';
import '../../../css/quote/statement.css';

const IncomeStatement = ({ statementData }) => {
  return (
    <div>
      <h3 className='statement-heading'>Income Statement</h3>
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
            label={'Revenue'}
            objectKey={'revenue'}
            statementData={statementData}
          />
          <StatementRow
            label={'Cost of Revenue'}
            objectKey={'costOfRevenue'}
            statementData={statementData}
          />
          <StatementRow
            label={'Gross Profit'}
            objectKey={'grossProfit'}
            statementData={statementData}
          />
          <StatementRow
            label={'Operating Expense'}
            objectKey={'operatingExpenses'}
            statementData={statementData}
          />
          <StatementRow
            label={'Operating Income'}
            objectKey={'operatingIncome'}
            statementData={statementData}
          />
          <StatementRow
            label={'Interest Expense'}
            objectKey={'interestExpense'}
            statementData={statementData}
          />
          <StatementRow
            label={'Other Income Expense'}
            objectKey={'totalOtherIncomeExpensesNet'}
            statementData={statementData}
          />
          <StatementRow
            label={'Pretax Income'}
            objectKey={'incomeBeforeTax'}
            statementData={statementData}
          />
          <StatementRow
            label={'Income Tax Expense'}
            objectKey={'incomeTaxExpense'}
            statementData={statementData}
          />
          <StatementRow
            label={'Net Income'}
            objectKey={'netIncome'}
            statementData={statementData}
          />
          <StatementRow
            label={'EPS'}
            objectKey={'eps'}
            statementData={statementData}
          />
          <StatementRow
            label={'Diluted EPS'}
            objectKey={'epsdiluted'}
            statementData={statementData}
          />
          <StatementRow
            label={'Diluted Average Shares'}
            objectKey={'weightedAverageShsOutDil'}
            statementData={statementData}
          />
          <StatementRow
            label={'Total Expenses'}
            objectKey={'costAndExpenses'}
            statementData={statementData}
          />
          <StatementRow
            label={'EBITDA'}
            objectKey={'ebitda'}
            statementData={statementData}
          />
          <StatementRow
            label={'Depreciation'}
            objectKey={'depreciationAndAmortization'}
            statementData={statementData}
          />
        </tbody>
      </table>
    </div>
  );
};

export default IncomeStatement;
