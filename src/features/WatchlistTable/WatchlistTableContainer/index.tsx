import React from 'react';
import { useSelector } from 'react-redux';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import useFetch from '../../../common/hooks/useFetch';
import { AppState } from '../../../reducers/rootReducer';
import { dummyWatchlistData } from '../../../app/dummyData';
import { formatData, properties } from '../../../common/utils/quoteTable';

const WatchlistTableContainer = () => {
  const watchlist = useSelector((state: AppState) => state.watchlist);

  const { data, loading } = useFetch(
    [], // intial value
    `quote/${watchlist.join()}`, // endpoint
    dummyWatchlistData // dummy data
  );

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
