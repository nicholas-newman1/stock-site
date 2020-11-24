import React from 'react';
import StatementHead from './statementHead';
import StatementRow from './statementRow';
import './statementTable.css';

const FinancialsTable = ({ statement, statementData }) => {
  const incomeStatementHeadings = [
    { label: 'Revenue', property: 'revenue' },
    { label: 'Cost of Revenue', property: 'costOfRevenue' },
    { label: 'Gross Profit', property: 'grossProfit' },
    { label: 'Operating Expense', property: 'operatingExpenses' },
    { label: 'Operating Income', property: 'operatingIncome' },
    { label: 'Interest Expense', property: 'interestExpense' },
    { label: 'Other Income Expense', property: 'totalOtherIncomeExpensesNet' },
    { label: 'Pretax Income', property: 'incomeBeforeTax' },
    { label: 'Income Tax Expense', property: 'incomeTaxExpense' },
    { label: 'Net Income', property: 'netIncome' },
    { label: 'EPS', property: 'eps' },
    { label: 'Diluted EPS', property: 'epsdiluted' },
    { label: 'Diluted Average Shares', property: 'weightedAverageShsOutDil' },
    { label: 'Total Expenses', property: 'costAndExpenses' },
    { label: 'EBITDA', property: 'ebitda' },
    { label: 'Depreciation', property: 'depreciationAndAmortization' },
  ];

  const balanceSheetHeadings = [
    { label: 'Total Assets', property: 'totalAssets' },
    { label: 'Current Assets', property: 'totalCurrentAssets' },
    { label: 'Non-Current Assets', property: 'totalNonCurrentAssets' },
    { label: 'Total Liabilities', property: 'totalLiabilities' },
    { label: 'Current Liabilities', property: 'totalCurrentLiabilities' },
    {
      label: 'Non-Current Liabilities',
      property: 'totalNonCurrentLiabilities',
    },
    { label: 'Total Stockholders Equity', property: 'totalStockholdersEquity' },
    { label: 'Total Debt', property: 'totalDebt' },
    { label: 'Long Term Debt', property: 'longTermDebt' },
    { label: 'Short Term Debt', property: 'shortTermDebt' },
  ];

  const cashFlowHeadings = [
    { label: 'Operating Cash Flow', property: 'operatingCashFlow' },
    {
      label: 'Investing Cash Flow',
      property: 'netCashUsedForInvestingActivities',
    },
    {
      label: 'Financing Cash Flow',
      property: 'netCashUsedProvidedByFinancingActivities',
    },
    { label: 'Beginning Cash Position', property: 'cashAtBeginningOfPeriod' },
    { label: 'Change In Cash', property: 'netChangeInCash' },
    { label: 'End Cash Position', property: 'cashAtEndOfPeriod' },
    { label: 'Capital Expenditure', property: 'capitalExpenditure' },
    { label: 'Common Stock Issued', property: 'commonStockIssued' },
    { label: 'Common Stock Repurchased', property: 'commonStockRepurchased' },
    { label: 'Debt Repayment', property: 'debtRepayment' },
    { label: 'Free Cash Flow', property: 'freeCashFlow' },
  ];

  let headings;

  if (statement === 'income-statement') headings = incomeStatementHeadings;
  if (statement === 'balance-sheet-statement') headings = balanceSheetHeadings;
  if (statement === 'cash-flow-statement') headings = cashFlowHeadings;

  return (
    <div className='statement'>
      <h3 className='statement__heading'>Balance Sheet</h3>
      <table className='statement__table'>
        <StatementHead tableData={statementData} />
        <tbody className='statement__tbody'>
          {headings.map(({ label, property }, i) => (
            <StatementRow
              key={i}
              label={label}
              objectKey={property}
              tableData={statementData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialsTable;
