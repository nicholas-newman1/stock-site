import React, { useEffect } from 'react';
import TableSortedPaginated from '../../../common/components/TableSortedPaginated';
import { formatData, properties } from '../../../common/utils/quoteTable';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../app/rootReducer';
import FetchErrorContainer from '../../../common/containers/FetchErrorContainer';
import { fetchCrypto } from '../cryptoSlice';
import Spinner from '../../../common/components/Spinner';

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

  if (loading) return <Spinner />;
  if (error || !data)
    return <FetchErrorContainer error='Failed to fetch cryptocurrencies' />;

  return (
    <TableSortedPaginated
      data={data}
      formatData={formatData}
      properties={properties}
      initialSortProperty='name'
    />
  );
};

export default CryptoTableContainer;
