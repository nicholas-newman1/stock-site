import React, { useEffect, useState } from 'react';
import QuoteFinancials from '../components/QuoteFinancials';
import { getDummyData, formatStatementData } from '../helpers';
import useFetch from '../../../common/hooks/useFetch';
import Spinner from '../../../common/components/Spinner';

interface Props {
  symbol: string;
}

const QuoteFinancialsContainer: React.FC<Props> = ({ symbol }) => {
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

  if (loading) if (loading) return <Spinner />;

  return (
    <QuoteFinancials
      tableData={tableData}
      setStatement={setStatement}
      setPeriod={setPeriod}
    />
  );
};

export default QuoteFinancialsContainer;
