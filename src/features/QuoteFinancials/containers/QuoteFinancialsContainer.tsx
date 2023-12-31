import React, { useEffect, useState } from 'react';
import QuoteFinancials from '../components/QuoteFinancials';
import { formatStatementData } from '../helpers';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { fetchFinancials } from '../quoteFinancialsSlice';

interface Props {
  symbol: string;
}

const QuoteFinancialsContainer: React.FC<Props> = ({ symbol }) => {
  const [statement, setStatement] = useState<Statement>('income-statement');
  const [period, setPeriod] = useState<Period>('annual');
  const [tableData, setTableData] = useState<any[][]>([]);

  const { data, loading, error } = useSelector(
    (state: AppState) => state.quoteFinancials
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFinancials(symbol, statement, period));
  }, [dispatch, symbol, statement, period, realDataStatus]);

  useEffect(() => {
    setTableData(formatStatementData(data, statement, period));
    //eslint-disable-next-line
  }, [data]);

  if (error)
    return <FetchErrorContainer error='Failed to fetch financial statement' />;

  return (
    <QuoteFinancials
      tableData={tableData}
      setStatement={setStatement}
      setPeriod={setPeriod}
      loading={loading}
    />
  );
};

export default QuoteFinancialsContainer;
