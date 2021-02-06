import React, { useEffect, useState } from 'react';
import {
  dummyAnnualValuationData,
  dummyQuarterlyValuationData,
} from '../../dummyData';
import { formatValuationData } from './helpers';
import useFetch from '../../hooks/useFetch';
import TableOne from '../dumb/TableOne';
import BtnBarOne from '../dumb/BtnBarOne';
import './quoteValuation.css';

interface Props {
  symbol: string;
}

const QuoteValuation: React.FC<Props> = ({ symbol }) => {
  const [period, setPeriod] = useState<Period>('annual');
  const [tableData, setTableData] = useState<any[][]>([]);

  // custom hook fetches data
  const { data, loading } = useFetch(
    [], // intial value
    `key-metrics/${symbol}`, // endpoint
    period === 'quarter'
      ? dummyQuarterlyValuationData
      : dummyAnnualValuationData,
    `period=${period}`, // parameters
    [period] // dependencies
  );

  useEffect(() => {
    setTableData(formatValuationData(data, period));
    //eslint-disable-next-line
  }, [data]);

  return (
    <div className='quote-valuation'>
      <BtnBarOne
        btns={[
          { text: 'Annually', value: 'annual' },
          { text: 'Quarterly', value: 'quarter' },
        ]}
        setState={setPeriod}
      />

      <TableOne data={tableData} loading={loading} horizontal={true} />
    </div>
  );
};

export default QuoteValuation;
