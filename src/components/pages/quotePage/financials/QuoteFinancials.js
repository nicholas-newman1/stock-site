import React, { useState, useEffect } from 'react';
import StatementTable from './StatementTable';
import QuoteFinancialsNav from './QuoteFinancialsNav';
import Spinner from '../../../global/Spinner';
import {
  dummyAnnualIncomeStatement,
  dummyQuarterlyIncomeStatement,
  dummyAnnualBalanceSheet,
  dummyQuarterlyBalanceSheet,
  dummyAnnualCashFlow,
  dummyQuarterlyCashFlow,
} from '../../../../dummyData';
import { formatStatementData } from '../../../../helpers';
import useFetch from '../../../../hooks/useFetch';

const QuoteFinancials = ({ symbol }) => {
  const [statement, setStatement] = useState('income-statement');
  const [period, setPeriod] = useState('');
  const [statementData, setStatementData] = useState([]);

  // determine which dummyData to use
  let dummyData;
  if (statement === 'income-statement') {
    period
      ? (dummyData = [...dummyQuarterlyIncomeStatement])
      : (dummyData = [...dummyAnnualIncomeStatement]);
  } else if (statement === 'balance-sheet-statement') {
    period
      ? (dummyData = [...dummyQuarterlyBalanceSheet])
      : (dummyData = [...dummyAnnualBalanceSheet]);
  } else if (statement === 'cash-flow-statement') {
    period
      ? (dummyData = [...dummyQuarterlyCashFlow])
      : (dummyData = [...dummyAnnualCashFlow]);
  }

  // custom hook makes fetch request
  const { data, loading } = useFetch(
    [], // initial value
    `${statement}/${symbol}`, // endpoint
    dummyData, // dummy data
    `period=${period}`, // parameters
    [statement, period] // dependencies
  );

  useEffect(() => {
    setStatementData(formatStatementData(data)); // format the data to be more readable
    //eslint-disable-next-line
  }, [data]);

  return (
    <div>
      <QuoteFinancialsNav setStatement={setStatement} setPeriod={setPeriod} />
      {loading ? (
        <Spinner />
      ) : statementData.length > 0 ? (
        <StatementTable statement={statement} statementData={statementData} />
      ) : (
        <h3>No Data Available</h3>
      )}
    </div>
  );
};

export default QuoteFinancials;
