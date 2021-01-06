/// <reference types="react-scripts" />
interface NewsItem {
  image: string;
  url: string;
  title: string;
  publishedDate: string;
  site: string;
  text: string;
}

interface Quote {
  symbol: string;
  name: string;
  price: number;
  changesPercentage: number;
  change: number;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
}

interface FormattedQuote {
  symbol: string;
  name: string;
  price: string;
  changesPercentage: string;
  change: string;
  dayLow: number;
  dayHigh: number;
  yearHigh: number;
  yearLow: number;
  marketCap: number;
  priceAvg50: number;
  priceAvg200: number;
  volume: number;
  avgVolume: number;
  exchange: string;
  open: number;
  previousClose: number;
  eps: number;
  pe: number;
  earningsAnnouncement: string;
  sharesOutstanding: number;
  timestamp: number;
  color: 'green' | '#de0e00' | 'black';
}

interface IncomeStatement {
  date: string | null;
  symbol: string | null;
  fillingDate: string | null;
  acceptedDate: string | null;
  period: string | null;
  revenue: number | null;
  costOfRevenue: number | null;
  grossProfit: number | null;
  grossProfitRatio: number | null;
  researchAndDevelopmentExpenses: number | null;
  generalAndAdministrativeExpenses: number | null;
  sellingAndMarketingExpenses: number | null;
  otherExpenses: number | null;
  operatingExpenses: number | null;
  costAndExpenses: number | null;
  interestExpense: number | null;
  depreciationAndAmortization: number | null;
  ebitda: number | null;
  ebitdaratio: number | null;
  operatingIncome: number | null;
  operatingIncomeRatio: number | null;
  totalOtherIncomeExpensesNet: number | null;
  incomeBeforeTax: number | null;
  incomeBeforeTaxRatio: number | null;
  incomeTaxExpense: number | null;
  netIncome: number | null;
  netIncomeRatio: number | null;
  eps: number | null;
  epsdiluted: number | null;
  weightedAverageShsOut: number | null;
  weightedAverageShsOutDil: number | null;
  link: string | null;
  finalLink: string | null;
}

interface FormattedIncomeStatement {
  date: string;
  symbol: string;
  fillingDate: string;
  acceptedDate: string;
  period: string;
  revenue: string;
  costOfRevenue: string;
  grossProfit: string;
  grossProfitRatio: string;
  researchAndDevelopmentExpenses: string;
  generalAndAdministrativeExpenses: string;
  sellingAndMarketingExpenses: string;
  otherExpenses: string;
  operatingExpenses: string;
  costAndExpenses: string;
  interestExpense: string;
  depreciationAndAmortization: string;
  ebitda: string;
  ebitdaratio: string;
  operatingIncome: string;
  operatingIncomeRatio: string;
  totalOtherIncomeExpensesNet: string;
  incomeBeforeTax: string;
  incomeBeforeTaxRatio: string;
  incomeTaxExpense: string;
  netIncome: string;
  netIncomeRatio: string;
  eps: string;
  epsdiluted: string;
  weightedAverageShsOut: string;
  weightedAverageShsOutDil: string;
  link: string;
  finalLink: string;
}

interface BalanceSheet {
  date: string | null;
  symbol: string | null;
  fillingDate: string | null;
  acceptedDate: string | null;
  period: string | null;
  cashAndCashEquivalents: number | null;
  shortTermInvestments: number | null;
  cashAndShortTermInvestments: number | null;
  netReceivables: number | null;
  inventory: number | null;
  otherCurrentAssets: number | null;
  totalCurrentAssets: number | null;
  propertyPlantEquipmentNet: number | null;
  goodwill: number | null;
  intangibleAssets: number | null;
  goodwillAndIntangibleAssets: number | null;
  longTermInvestments: number | null;
  taxAssets: number | null;
  otherNonCurrentAssets: number | null;
  totalNonCurrentAssets: number | null;
  otherAssets: number | null;
  totalAssets: number | null;
  accountPayables: number | null;
  shortTermDebt: number | null;
  taxPayables: number | null;
  deferredRevenue: number | null;
  otherCurrentLiabilities: number | null;
  totalCurrentLiabilities: number | null;
  longTermDebt: number | null;
  deferredRevenueNonCurrent: number | null;
  deferredTaxLiabilitiesNonCurrent: number | null;
  otherNonCurrentLiabilities: number | null;
  totalNonCurrentLiabilities: number | null;
  otherLiabilities: number | null;
  totalLiabilities: number | null;
  commonStock: number | null;
  retainedEarnings: number | null;
  accumulatedOtherComprehensiveIncomeLoss: number | null;
  othertotalStockholdersEquity: number | null;
  totalStockholdersEquity: number | null;
  totalLiabilitiesAndStockholdersEquity: number | null;
  totalInvestments: number | null;
  totalDebt: number | null;
  netDebt: number | null;
  link: string | null;
  finalLink: string | null;
}

interface FormattedBalanceSheet {
  date: string;
  symbol: string;
  fillingDate: string;
  acceptedDate: string;
  period: string;
  cashAndCashEquivalents: string;
  shortTermInvestments: string;
  cashAndShortTermInvestments: string;
  netReceivables: string;
  inventory: string;
  otherCurrentAssets: string;
  totalCurrentAssets: string;
  propertyPlantEquipmentNet: string;
  goodwill: string;
  intangibleAssets: string;
  goodwillAndIntangibleAssets: string;
  longTermInvestments: string;
  taxAssets: string;
  otherNonCurrentAssets: string;
  totalNonCurrentAssets: string;
  otherAssets: string;
  totalAssets: string;
  accountPayables: string;
  shortTermDebt: string;
  taxPayables: string;
  deferredRevenue: string;
  otherCurrentLiabilities: string;
  totalCurrentLiabilities: string;
  longTermDebt: string;
  deferredRevenueNonCurrent: string;
  deferredTaxLiabilitiesNonCurrent: string;
  otherNonCurrentLiabilities: string;
  totalNonCurrentLiabilities: string;
  otherLiabilities: string;
  totalLiabilities: string;
  commonStock: string;
  retainedEarnings: string;
  accumulatedOtherComprehensiveIncomeLoss: string;
  othertotalStockholdersEquity: string;
  totalStockholdersEquity: string;
  totalLiabilitiesAndStockholdersEquity: string;
  totalInvestments: string;
  totalDebt: string;
  netDebt: string;
  link: string;
  finalLink: string;
}

interface CashFlow {
  date: string | null;
  symbol: string | null;
  fillingDate: string | null;
  acceptedDate: string | null;
  period: string | null;
  netIncome: number | null;
  depreciationAndAmortization: number | null;
  deferredIncomeTax: number | null;
  stockBasedCompensation: number | null;
  changeInWorkingCapital: number | null;
  accountsReceivables: number | null;
  inventory: number | null;
  accountsPayables: number | null;
  otherWorkingCapital: number | null;
  otherNonCashItems: number | null;
  netCashProvidedByOperatingActivities: number | null;
  investmentsInPropertyPlantAndEquipment: number | null;
  acquisitionsNet: number | null;
  purchasesOfInvestments: number | null;
  salesMaturitiesOfInvestments: number | null;
  otherInvestingActivites: number | null;
  netCashUsedForInvestingActivites: number | null;
  debtRepayment: number | null;
  commonStockIssued: number | null;
  commonStockRepurchased: number | null;
  dividendsPaid: number | null;
  otherFinancingActivites: number | null;
  netCashUsedProvidedByFinancingActivities: number | null;
  effectOfForexChangesOnCash: number | null;
  netChangeInCash: number | null;
  cashAtEndOfPeriod: number | null;
  cashAtBeginningOfPeriod: number | null;
  operatingCashFlow: number | null;
  capitalExpenditure: number | null;
  freeCashFlow: number | null;
  link: string | null;
  finalLink: string | null;
}

interface FormattedCashFlow {
  date: string;
  symbol: string;
  fillingDate: string;
  acceptedDate: string;
  period: string;
  netIncome: string;
  depreciationAndAmortization: string;
  deferredIncomeTax: string;
  stockBasedCompensation: string;
  changeInWorkingCapital: string;
  accountsReceivables: string;
  inventory: string;
  accountsPayables: string;
  otherWorkingCapital: string;
  otherNonCashItems: string;
  netCashProvidedByOperatingActivities: string;
  investmentsInPropertyPlantAndEquipment: string;
  acquisitionsNet: string;
  purchasesOfInvestments: string;
  salesMaturitiesOfInvestments: string;
  otherInvestingActivites: string;
  netCashUsedForInvestingActivites: string;
  debtRepayment: string;
  commonStockIssued: string;
  commonStockRepurchased: string;
  dividendsPaid: string;
  otherFinancingActivites: string;
  netCashUsedProvidedByFinancingActivities: string;
  effectOfForexChangesOnCash: string;
  netChangeInCash: string;
  cashAtEndOfPeriod: string;
  cashAtBeginningOfPeriod: string;
  operatingCashFlow: string;
  capitalExpenditure: string;
  freeCashFlow: string;
  link: string;
  finalLink: string;
}

type Timeframe = '1D' | '5D' | '1M' | 'YTD' | '1Y' | '5Y' | 'MAX';

type Statement =
  | 'income-statement'
  | 'balance-sheet-statement'
  | 'cash-flow-statement';

type Period = '' | 'quarter';

interface TableHeading {
  label: string;
  property: string;
}

type StatementData = (IncomeStatement | BalanceSheet | CashFlow)[];

type FormattedStatementData = (
  | FormattedIncomeStatement
  | FormattedBalanceSheet
  | FormattedCashFlow
)[];
