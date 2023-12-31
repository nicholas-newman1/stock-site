import React, { useEffect } from 'react';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import { formatData, properties } from '../../../common/utils/quoteTable';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { fetchIndex } from '../indexSlice';
import Spinner from '../../../common/components/Spinner';

const IndexTableContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.index
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIndex());
  }, [dispatch, realDataStatus]);

  if (loading) return <Spinner />;
  if (error) return <FetchErrorContainer error='Failed to fetch indexes' />;

  return (
    <TableSortedPaginated
      data={data}
      formatData={formatData}
      properties={properties}
      initialSortProperty='name'
    />
  );
};

export default IndexTableContainer;
