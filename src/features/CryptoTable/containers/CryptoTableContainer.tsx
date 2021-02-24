import React, { useEffect } from 'react';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import { formatData, properties } from '../../../common/utils/quoteTable';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { fetchCrypto } from '../cryptoSlice';

const CryptoTableContainer = () => {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.crypto
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch, realDataStatus]);

  if (error)
    return <FetchErrorContainer error='Failed to fetch cryptocurrencies' />;

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

export default CryptoTableContainer;
