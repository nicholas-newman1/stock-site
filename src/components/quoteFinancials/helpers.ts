import {
  dummyAnnualBalanceSheet,
  dummyAnnualCashFlow,
  dummyAnnualIncomeStatement,
  dummyQuarterlyBalanceSheet,
  dummyQuarterlyCashFlow,
  dummyQuarterlyIncomeStatement,
} from '../../utils/dummyData';
import {
  formatDates,
  pluckProperties,
  replaceNullValues,
  shortenNumbers,
} from '../../utils/helpers';

export const getDummyData = (statement: Statement, period: Period) => {
  if (statement === 'income-statement') {
    return period === 'quarter'
      ? [...dummyQuarterlyIncomeStatement]
      : [...dummyAnnualIncomeStatement];
  } else if (statement === 'balance-sheet-statement') {
    return period === 'quarter'
      ? [...dummyQuarterlyBalanceSheet]
      : [...dummyAnnualBalanceSheet];
  } else {
    return period === 'quarter'
      ? [...dummyQuarterlyCashFlow]
      : [...dummyAnnualCashFlow];
  }
};

const incomeStatementLabels: KeyValueObject = {
  date: 'Date',
  revenue: 'Revenue',
  costOfRevenue: 'Cost of Revenue',
  grossProfit: 'Gross Profit',
  operatingExpenses: 'Operating Expense',
  operatingIncome: 'Operating Income',
  interestExpense: 'Interest Expense',
  totalOtherIncomeExpensesNet: 'Other Income Expense',
  incomeBeforeTax: 'Pretax Income',
  incomeTaxExpense: 'Income Tax Expense',
  netIncome: 'Net Income',
  eps: 'EPS',
  epsdiluted: 'Diluted EPS',
  weightedAverageShsOutDil: 'Diluted Average Shares',
  costAndExpenses: 'Total Expenses',
  ebitda: 'EBITDA',
  depreciationAndAmortization: 'Depreciation',
};

const balanceSheetLabels: KeyValueObject = {
  date: 'Date',
  totalAssets: 'Total Assets',
  totalCurrentAssets: 'Current Assets',
  totalNonCurrentAssets: 'Non-Current Assets',
  totalLiabilities: 'Total Liabilities',
  totalCurrentLiabilities: 'Current Liabilities',
  totalNonCurrentLiabilities: 'Non-Current Liabilities',
  totalStockholdersEquity: 'Total Stockholders Equity',
  totalDebt: 'Total Debt',
  longTermDebt: 'Long Term Debt',
  shortTermDebt: 'Short Term Debt',
};

const cashFlowLabels: KeyValueObject = {
  date: 'Date',
  operatingCashFlow: 'Operating Cash Flow',
  netCashUsedForInvestingActivities: 'Investing Cash Flow',
  netCashUsedProvidedByFinancingActivities: 'Financing Cash Flow',
  cashAtBeginningOfPeriod: 'Beginning Cash Position',
  netChangeInCash: 'Change In Cash',
  cashAtEndOfPeriod: 'End Cash Position',
  capitalExpenditure: 'Capital Expenditure',
  commonStockIssued: 'Common Stock Issued',
  commonStockRepurchased: 'Common Stock Repurchased',
  debtRepayment: 'Debt Repayment',
  freeCashFlow: 'Free Cash Flow',
};

export const getProperties = (statement: Statement) => {
  if (statement === 'income-statement') {
    return Object.keys(incomeStatementLabels);
  } else if (statement === 'balance-sheet-statement') {
    return Object.keys(balanceSheetLabels);
  } else {
    return Object.keys(cashFlowLabels);
  }
};

const getLabel = (property: string, statement: Statement) => {
  if (statement === 'income-statement') {
    return incomeStatementLabels[property];
  } else if (statement === 'balance-sheet-statement') {
    return balanceSheetLabels[property];
  } else {
    return cashFlowLabels[property];
  }
};

export const formatStatementData = (
  data: KeyValueObject[],
  statement: Statement,
  period: Period
) => {
  // replace null values with N/A and large numbers with shortened versions
  const prettier = data.map((item) => shortenNumbers(replaceNullValues(item)));

  /* Create an array of arrays. Each sub array contains the values for a given property that should be common between all the financial statement objects in the given data. */
  const plucked = pluckProperties(prettier, getProperties(statement));

  // formats dates based on period (annual or quarterly)
  plucked.unshift(formatDates(plucked.shift()!, period));

  /* Each row needs a heading in the 0 index. */
  const labeled = plucked.map((row, i) => {
    row.unshift(getLabel(getProperties(statement)[i], statement));
    return row;
  });
  return labeled;
};
