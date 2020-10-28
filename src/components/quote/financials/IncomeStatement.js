import React, { useEffect } from 'react';
import QuoteTableHead from './QuoteTableHead';
import QuoteTableRow from './QuoteTableRow';
import '../../../css/quote/quoteTable.css';

const IncomeStatement = ({ statementData }) => {
  // scroll to the left when rendering table
  useEffect(() => {
    document.querySelector('.quote-table').scrollLeft = 0;
  });

  return (
    <div>
      <h3 className='statement-heading'>Income Statement</h3>
      <table className='quote-table'>
        <QuoteTableHead tableData={statementData} />
        <tbody className='quote-tbody'>
          <QuoteTableRow
            label={'Revenue'}
            objectKey={'revenue'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Cost of Revenue'}
            objectKey={'costOfRevenue'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Gross Profit'}
            objectKey={'grossProfit'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Operating Expense'}
            objectKey={'operatingExpenses'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Operating Income'}
            objectKey={'operatingIncome'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Interest Expense'}
            objectKey={'interestExpense'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Other Income Expense'}
            objectKey={'totalOtherIncomeExpensesNet'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Pretax Income'}
            objectKey={'incomeBeforeTax'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Income Tax Expense'}
            objectKey={'incomeTaxExpense'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Net Income'}
            objectKey={'netIncome'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'EPS'}
            objectKey={'eps'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Diluted EPS'}
            objectKey={'epsdiluted'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Diluted Average Shares'}
            objectKey={'weightedAverageShsOutDil'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Total Expenses'}
            objectKey={'costAndExpenses'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'EBITDA'}
            objectKey={'ebitda'}
            tableData={statementData}
          />
          <QuoteTableRow
            label={'Depreciation'}
            objectKey={'depreciationAndAmortization'}
            tableData={statementData}
          />
        </tbody>
      </table>
    </div>
  );
};

export default IncomeStatement;
