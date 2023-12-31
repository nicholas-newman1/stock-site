import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import PriceList from '../../../common/components/PriceList';
import Spinner from '../../../common/components/Spinner';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { formatMarketQuotes } from '../../../common/utils/helpers';
import { fetchGainers } from '../gainersSlice';

const GainersPriceListContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.gainers
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGainers());
  }, [dispatch, realDataStatus]);

  if (loading) return <Spinner />;
  if (error)
    return <FetchErrorContainer error='Failed to fetch gainer stocks' />;

  return (
    <PriceList
      quotes={formatMarketQuotes(data)}
      link={{ to: '', label: 'Gainers' }}
      loading={loading}
    />
  );
};

export default GainersPriceListContainer;
