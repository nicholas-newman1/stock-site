import React, { useEffect } from 'react';
import QuoteProfile from '../components/QuoteProfile';
import Spinner from '../../../common/components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { fetchProfile } from '../quoteProfileSlice';

interface Props {
  symbol: string;
}

const QuoteProfileContainer: React.FC<Props> = ({ symbol }) => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.quoteProfile
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile(symbol));
  }, [dispatch, symbol, realDataStatus]);

  if (loading) return <Spinner />;

  if (error) return <FetchErrorContainer error='Failed to fetch profile' />;

  return <QuoteProfile profile={data[0]} />;
};

export default QuoteProfileContainer;
