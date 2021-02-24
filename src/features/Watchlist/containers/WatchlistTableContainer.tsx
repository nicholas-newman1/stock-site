import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import { AppState } from '../../../app/rootReducer';
import { formatData, properties } from '../../../common/utils/quoteTable';
import { fetchWatchlist } from '../watchlistSlice';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';

const WatchlistTableContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.watchlist
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWatchlist());
  }, [dispatch, realDataStatus]);

  if (error) return <FetchErrorContainer error='Failed to fetch watchlist' />;

  return (
    <TableSortedPaginated
      data={data}
      formatData={formatData}
      loading={loading}
      properties={properties}
      initialSortProperty='name'
    />
  );
};

export default WatchlistTableContainer;
