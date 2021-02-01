import React, { useState } from 'react';
import StatementTable from '../QuoteTable';
import Spinner from '../Spinner';
import { formatStatementData } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import './quoteFinancials.css';
import ButtonBar from '../dumb/BtnBar';
import { getDummyData, getStatementHeading, getTableHeadings } from './helpers';

interface Props {
  symbol: string;
}

const QuoteFinancials: React.FC<Props> = ({ symbol }) => {
  const [statement, setStatement] = useState<Statement>('income-statement');
  const [period, setPeriod] = useState<Period>('');

  // custom hook makes fetch request
  const { data, loading } = useFetch(
    [], // initial value
    `${statement}/${symbol}`, // endpoint
    getDummyData(statement, period), // dummy data
    `period=${period}`, // parameters
    [statement, period] // dependencies
  );

  const statementNavBtns = [
    { text: 'Income Statement', value: 'income-statement' },
    { text: 'Balance Sheet', value: 'balance-sheet-statement' },
    { text: 'Cash Flow', value: 'cash-flow-statement' },
  ];

  const periodNavBtns = [
    { text: 'Annually', value: '' },
    { text: 'Quarterly', value: 'quarter' },
  ];

  return (
    <div className='quote-financials'>
      <div className='quote-financials__nav'>
        <ButtonBar btns={statementNavBtns} setState={setStatement} />
        <ButtonBar btns={periodNavBtns} setState={setPeriod} />
      </div>

      {loading ? (
        <Spinner />
      ) : data.length > 0 ? (
        <div className='statement'>
          <h3 className='statement__heading'>
            {getStatementHeading(statement)}
          </h3>
          <StatementTable
            statementData={formatStatementData(data)}
            tableHeadings={getTableHeadings(statement)}
          />
        </div>
      ) : (
        <h3>No Data Available</h3>
      )}
    </div>
  );
};

export default QuoteFinancials;
