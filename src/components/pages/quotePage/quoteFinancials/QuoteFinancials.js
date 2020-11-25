import React, { useState, useEffect } from 'react';
import StatementTable from '../quoteTable/QuoteTable';
import QuoteFinancialsNav from './QuoteFinancialsNav';
import Spinner from '../../../global/Spinner';
import {
  dummyAnnualIncomeStatement,
  dummyQuarterlyIncomeStatement,
  dummyAnnualBalanceSheet,
  dummyQuarterlyBalanceSheet,
  dummyAnnualCashFlow,
  dummyQuarterlyCashFlow,
} from '../../../../dummyData';
import { formatStatementData } from '../../../../helpers';
import useFetch from '../../../../hooks/useFetch';
import './quoteFinancials.css';

const QuoteFinancials = ({ symbol }) => {
  const [statement, setStatement] = useState('income-statement');
  const [period, setPeriod] = useState('');
  const [statementData, setStatementData] = useState([]);

  // determine which dummyData to use
  let dummyData;
  if (statement === 'income-statement') {
    period
      ? (dummyData = [...dummyQuarterlyIncomeStatement])
      : (dummyData = [...dummyAnnualIncomeStatement]);
  } else if (statement === 'balance-sheet-statement') {
    period
      ? (dummyData = [...dummyQuarterlyBalanceSheet])
      : (dummyData = [...dummyAnnualBalanceSheet]);
  } else if (statement === 'cash-flow-statement') {
    period
      ? (dummyData = [...dummyQuarterlyCashFlow])
      : (dummyData = [...dummyAnnualCashFlow]);
  }

  // custom hook makes fetch request
  const { data, loading } = useFetch(
    [], // initial value
    `${statement}/${symbol}`, // endpoint
    dummyData, // dummy data
    `period=${period}`, // parameters
    [statement, period] // dependencies
  );

  useEffect(() => {
    setStatementData(formatStatementData(data)); // format the data to be more readable
    //eslint-disable-next-line
  }, [data]);

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

  let tableHeadings;
  let heading;

  if (statement === 'income-statement') {
    tableHeadings = incomeStatementHeadings;
    heading = 'Income Statement';
  } else if (statement === 'balance-sheet-statement') {
    tableHeadings = balanceSheetHeadings;
    heading = 'Balance Sheet';
  } else if (statement === 'cash-flow-statement') {
    tableHeadings = cashFlowHeadings;
    heading = 'Cash Flow';
  }

  return (
    <div>
      <QuoteFinancialsNav setStatement={setStatement} setPeriod={setPeriod} />
      {loading ? (
        <Spinner />
      ) : statementData.length > 0 ? (
        <div className='statement'>
          <h3 className='statement__heading'>{heading}</h3>
          <StatementTable
            statementData={statementData}
            tableHeadings={tableHeadings}
          />
        </div>
      ) : (
        <h3>No Data Available</h3>
      )}
    </div>
  );
};

export default QuoteFinancials;
