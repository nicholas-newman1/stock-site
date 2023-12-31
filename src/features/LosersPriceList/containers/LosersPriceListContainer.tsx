import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import PriceList from '../../../common/components/PriceList';
import Spinner from '../../../common/components/Spinner';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { formatMarketQuotes } from '../../../common/utils/helpers';
import { fetchLosers } from '../losersSlice';

const LosersPriceListContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.losers
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLosers());
  }, [dispatch, realDataStatus]);

  if (loading) return <Spinner />;
  if (error || !data)
    return <FetchErrorContainer error='Failed to fetch loser stocks' />;

  return (
    <PriceList
      quotes={formatMarketQuotes(data)}
      link={{ to: '', label: 'Losers' }}
      loading={loading}
    />
  );
};

export default LosersPriceListContainer;
