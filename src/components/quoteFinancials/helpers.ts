import {
  dummyAnnualBalanceSheet,
  dummyAnnualCashFlow,
  dummyAnnualIncomeStatement,
  dummyQuarterlyBalanceSheet,
  dummyQuarterlyCashFlow,
  dummyQuarterlyIncomeStatement,
} from '../../dummyData';
import { formatStatementData } from '../../helpers';

export const getDummyData = (statement: Statement, period: Period) => {
  if (statement === 'income-statement') {
    return period
      ? formatStatementData([...dummyQuarterlyIncomeStatement])
      : formatStatementData([...dummyAnnualIncomeStatement]);
  } else if (statement === 'balance-sheet-statement') {
    return period
      ? formatStatementData([...dummyQuarterlyBalanceSheet])
      : formatStatementData([...dummyAnnualBalanceSheet]);
  } else {
    return period
      ? formatStatementData([...dummyQuarterlyCashFlow])
      : formatStatementData([...dummyAnnualCashFlow]);
  }
};

export const getTableHeadings = (statement: Statement) => {
  if (statement === 'income-statement') {
    return [
      'Revenue',
      'Cost of Revenue',
      'Gross Profit',
      'Operating Expense',
      'Operating Income',
      'Interest Expense',
      'Other Income Expense',
      'Pretax Income',
      'Income Tax Expense',
      'Net Income',
      'EPS',
      'Diluted EPS',
      'Diluted Average Shares',
      'Total Expenses',
      'EBITDA',
      'Depreciation',
    ];
  } else if (statement === 'balance-sheet-statement') {
    return [
      'Total Assets',
      'Current Assets',
      'Non-Current Assets',
      'Total Liabilities',
      'Current Liabilities',
      'Non-Current Liabilities',
      'Total Stockholders Equity',
      'Total Debt',
      'Long Term Debt',
      'Short Term Debt',
    ];
  } else {
    return [
      'Operating Cash Flow',
      'Investing Cash Flow',
      'Financing Cash Flow',
      'Beginning Cash Position',
      'Change In Cash',
      'End Cash Position',
      'Capital Expenditure',
      'Common Stock Issued',
      'Common Stock Repurchased',
      'Debt Repayment',
      'Free Cash Flow',
    ];
  }
};

export const getProperties = (statement: Statement) => {
  if (statement === 'income-statement') {
    return [
      'revenue',
      'costOfRevenue',
      'grossProfit',
      'operatingExpenses',
      'operatingIncome',
      'interestExpense',
      'totalOtherIncomeExpensesNet',
      'incomeBeforeTax',
      'incomeTaxExpense',
      'netIncome',
      'eps',
      'epsdiluted',
      'weightedAverageShsOutDil',
      'costAndExpenses',
      'ebitda',
      'depreciationAndAmortization',
    ];
  } else if (statement === 'balance-sheet-statement') {
    return [
      'totalAssets',
      'totalCurrentAssets',
      'totalNonCurrentAssets',
      'totalLiabilities',
      'totalCurrentLiabilities',
      'totalNonCurrentLiabilities',
      'totalStockholdersEquity',
      'totalDebt',
      'longTermDebt',
      'shortTermDebt',
    ];
  } else {
    return [
      'operatingCashFlow',
      'netCashUsedForInvestingActivities',
      'netCashUsedProvidedByFinancingActivities',
      'cashAtBeginningOfPeriod',
      'netChangeInCash',
      'cashAtEndOfPeriod',
      'capitalExpenditure',
      'commonStockIssued',
      'commonStockRepurchased',
      'debtRepayment',
      'freeCashFlow',
    ];
  }
};
