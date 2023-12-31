import React, { useEffect } from 'react';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import { formatData, properties } from '../../../common/utils/quoteTable';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { fetchCommodity } from '../commoditySlice';
import Spinner from '../../../common/components/Spinner';

const CommodityTableContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.commodity
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommodity());
  }, [dispatch, realDataStatus]);

  if (loading) return <Spinner />;
  if (error || !data)
    return <FetchErrorContainer error='Failed to fetch commodities' />;

  return (
    <TableSortedPaginated
      data={data}
      formatData={formatData}
      properties={properties}
      initialSortProperty='name'
    />
  );
};

export default CommodityTableContainer;
