import React, { useEffect, useState } from 'react';
import { formatStatementData } from './helpers';
import useFetch from '../../hooks/useFetch';
import './quoteFinancials.css';
import TableOne from '../dumb/TableOne';
import { getDummyData } from './helpers';
import BtnBarOne from '../dumb/BtnBarOne';

interface Props {
  symbol: string;
}

const QuoteFinancials: React.FC<Props> = ({ symbol }) => {
  const [statement, setStatement] = useState<Statement>('income-statement');
  const [period, setPeriod] = useState<Period>('annual');
  const [tableData, setTableData] = useState<any[][]>([]);

  // custom hook makes fetch request
  const { data, loading } = useFetch(
    [], // initial value
    `${statement}/${symbol}`, // endpoint
    getDummyData(statement, period), // dummy data
    `period=${period}`, // parameters
    [statement, period] // dependencies
  );

  useEffect(() => {
    setTableData(formatStatementData(data, statement, period));
    //eslint-disable-next-line
  }, [data]);

  return (
    <div className='quote-financials'>
      <div className='quote-financials__nav'>
        <BtnBarOne
          btns={[
            { text: 'Income Statement', value: 'income-statement' },
            { text: 'Balance Sheet', value: 'balance-sheet-statement' },
            { text: 'Cash Flow', value: 'cash-flow-statement' },
          ]}
          setState={setStatement}
        />
        <BtnBarOne
          btns={[
            { text: 'Annually', value: 'annual' },
            { text: 'Quarterly', value: 'quarter' },
          ]}
          setState={setPeriod}
        />
      </div>

      <TableOne data={tableData} loading={loading} horizontal={true} />
    </div>
  );
};

export default QuoteFinancials;
