import React, { useEffect, useState } from 'react';
import QuoteValuationNav from '../quoteValuationNav/QuoteValuationNav';
import QuoteTableHead from '../quoteTable/QuoteTableHead';
import QuoteTableRow from '../quoteTable/QuoteTableRow';
import {
  dummyAnnualValuationData,
  dummyQuarterlyValuationData,
} from '../../dummyData';
import { formatValuationData } from '../../helpers';
import useFetch from '../../hooks/useFetch';

interface Props {
  symbol: string;
}

const QuoteValuation: React.FC<Props> = ({ symbol }) => {
  const [valuationData, setValuationData] = useState<APIObject[]>([]);
  const [period, setPeriod] = useState<Period>('');

  // custom hook fetches data
  const { data, loading } = useFetch(
    [], // intial value
    `key-metrics/${symbol}`, // endpoint
    period ? dummyQuarterlyValuationData : dummyAnnualValuationData,
    `period=${period}`, // parameters
    [period] // dependencies
  );

  useEffect(() => {
    // format data to be more readable
    setValuationData(formatValuationData(data, period));
    // eslint-disable-next-line
  }, [data]);

  const tableHeadings = [
    { label: 'EPS', property: 'netIncomePerShare' },
    { label: 'Book Value/Share', property: 'bookValuePerShare' },
    { label: 'Price/Sales', property: 'priceToSalesRatio' },
    { label: 'P/E', property: 'peRatio' },
    { label: 'P/B', property: 'pbRatio' },
    { label: 'P/FCF', property: 'pfcfRatio' },
    { label: 'P/OCF', property: 'pocfratio' },
    { label: 'Earnings Yield (%)', property: 'earningsYield' },
    { label: 'Enterprise Value', property: 'enterpriseValue' },
    { label: 'Enterprise Value/EBITDA', property: 'enterpriseValueOverEBITDA' },
    { label: 'ROE', property: 'roe' },
    { label: 'FCF/Share', property: 'freeCashFlowPerShare' },
    { label: 'Debt/Equity', property: 'debtToEquity' },
  ];

  return loading || valuationData.length > 0 ? (
    <div>
      <QuoteValuationNav setPeriod={setPeriod} />
      <table className='quote-table'>
        <QuoteTableHead tableData={valuationData} />
        <tbody className='quote-table__tbody'>
          {tableHeadings.map(({ label, property }, i) => (
            <QuoteTableRow
              key={i}
              label={label}
              objectKey={property}
              tableData={valuationData}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h2>No Data Available</h2>
  );
};

export default QuoteValuation;
