import React, { useEffect, useState } from 'react';
import QuoteValuation from '../components/QuoteValuation';
import { formatValuationData } from '../helpers';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import { fetchValuation } from '../quoteValuationSlice';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';

interface Props {
  symbol: string;
}

const QuoteValuationContainer: React.FC<Props> = ({ symbol }) => {
  const [period, setPeriod] = useState<Period>('annual');
  const [tableData, setTableData] = useState<any[][]>([]);

  const { data, loading, error } = useSelector(
    (state: AppState) => state.quoteValuation
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchValuation(symbol, period));
  }, [dispatch, symbol, period, realDataStatus]);

  useEffect(() => {
    setTableData(formatValuationData(data, period));
    //eslint-disable-next-line
  }, [data]);

  if (error || !data)
    return <FetchErrorContainer error='Failed to fetch valuation' />;

  return (
    <QuoteValuation
      tableData={tableData}
      setPeriod={setPeriod}
      loading={loading}
    />
  );
};

export default QuoteValuationContainer;
