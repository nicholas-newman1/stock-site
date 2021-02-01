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

export const getStatementHeading = (statement: Statement) => {
  if (statement === 'income-statement') {
    return 'Income Statement';
  } else if (statement === 'balance-sheet-statement') {
    return 'Balance Sheet';
  } else {
    return 'Cash Flow';
  }
};

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

export const getTableHeadings = (statement: Statement) => {
  if (statement === 'income-statement') {
    return incomeStatementHeadings;
  } else if (statement === 'balance-sheet-statement') {
    return balanceSheetHeadings;
  } else {
    return cashFlowHeadings;
  }
};
