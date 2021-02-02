import React, { useState } from 'react';
import {
  dummyAnnualValuationData,
  dummyQuarterlyValuationData,
} from '../../dummyData';
import { formatValuationData, pluck, pluckAll } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import TableOne from '../dumb/TableOne';
import BtnBarOne from '../dumb/BtnBarOne';
import './quoteValuation.css';

interface Props {
  symbol: string;
}

const QuoteValuation: React.FC<Props> = ({ symbol }) => {
  // const [valuationData, setValuationData] = useState<KeyValueObject[]>([]);
  const [period, setPeriod] = useState<Period>('');

  // custom hook fetches data
  const { data, loading } = useFetch(
    [], // intial value
    `key-metrics/${symbol}`, // endpoint
    period ? dummyQuarterlyValuationData : dummyAnnualValuationData,
    `period=${period}`, // parameters
    [period] // dependencies
  );

  const properties = [
    'netIncomePerShare',
    'bookValuePerShare',
    'priceToSalesRatio',
    'peRatio',
    'pbRatio',
    'pfcfRatio',
    'pocfratio',
    'earningsYield',
    'enterpriseValue',
    'enterpriseValueOverEBITDA',
    'roe',
    'freeCashFlowPerShare',
    'debtToEquity',
  ];

  const rowHeadings = [
    'EPS',
    'Book Value/Share',
    'Price/Sales',
    'P/E',
    'P/B',
    'P/FCF',
    'P/OCF',
    'Earnings Yield (%)',
    'Enterprise Value',
    'Enterprise Value/EBITDA',
    'ROE',
    'FCF/Share',
    'Debt/Equity',
  ];

  const periodNavBtns = [
    { text: 'Annually', value: '' },
    { text: 'Quarterly', value: 'quarter' },
  ];

  return (
    <div className='quote-valuation'>
      <BtnBarOne btns={periodNavBtns} setState={setPeriod} />
      <TableOne
        data={pluckAll(formatValuationData(data, period), properties)}
        rowHeadings={rowHeadings}
        headHeadings={pluck(formatValuationData(data, period), 'date')}
        loading={loading}
      />
    </div>
  );
};

export default QuoteValuation;
