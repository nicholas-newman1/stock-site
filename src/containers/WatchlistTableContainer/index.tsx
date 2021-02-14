import React from 'react';
import { useSelector } from 'react-redux';
import TableSortedPaginated from '../../components/TableSortedPaginated';
import useFetch from '../../hooks/useFetch';
import { AppState } from '../../reducers/rootReducer';
import { dummyWatchlistData } from '../../utils/dummyData';
import { formatData, properties } from '../../utils/quoteTable';

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
