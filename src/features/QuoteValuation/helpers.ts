import {
  formatDates,
  pluckProperties,
  replaceNullValues,
  shortenNumbers,
} from '../../common/utils/helpers';

const valuationLabels: KeyValueObject = {
  date: 'Date',
  netIncomePerShare: 'EPS',
  bookValuePerShare: 'Book Value/Share',
  priceToSalesRatio: 'Price/Sales',
  peRatio: 'P/E',
  pbRatio: 'P/B',
  pfcfRatio: 'P/FCF',
  pocfratio: 'P/OCF',
  earningsYield: 'Earnings Yield (%)',
  enterpriseValue: 'Enterprise Value',
  enterpriseValueOverEBITDA: 'Enterprise Value/EBITDA',
  roe: 'ROE',
  freeCashFlowPerShare: 'FCF/Share',
  debtToEquity: 'Debt/Equity',
};

// formats the data to be more readable
export const formatValuationData = (data: KeyValueObject[], period: Period) => {
  if (data.length <= 0) return [];
  // replace null values with N/A and large numbers with shortened versions
  let prettier = data.map((item) => shortenNumbers(replaceNullValues(item)));

  /* Create an array of arrays. Each sub array contains the values for a given property that should be common between all the financial statement objects in the given data. */
  const plucked = pluckProperties(prettier, Object.keys(valuationLabels));

  // formats dates based on period (annual or quarterly)
  plucked.unshift(formatDates(plucked.shift()!, period));

  /* Each row needs a heading in the 0 index. */
  const labeled = plucked.map((row, i) => {
    row.unshift(valuationLabels[Object.keys(valuationLabels)[i]]);
    return row;
  });
  return labeled;
};
