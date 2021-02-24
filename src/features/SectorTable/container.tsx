import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../app/rootReducer';
import FetchErrorContainer from '../../common/containers/FetchErrorContainer';
import SectorTable from './components/SectorTable';
import { fetchSectors } from './sectorsSlice';

const SectorTableContainer = () => {
  const [showAllSectors, setShowAllSectors] = useState(false);

  const { data, loading, error } = useSelector(
    (state: AppState) => state.sectors
  );

  const realDataStatus = useSelector(
    (state: AppState) => state.realData.status
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSectors());
  }, [dispatch, realDataStatus]);

  if (error) return <FetchErrorContainer error='Failed to fetch sectors' />;

  return (
    <div>
      <SectorTable
        data={showAllSectors ? data : data.filter((x, i) => i < 14)}
        loading={loading}
      />
      <button
        className='stock-page__btn btn btn-grey btn-small'
        onClick={() => setShowAllSectors((prev) => !prev)}
      >
        {showAllSectors ? 'Hide Sectors' : 'Show All Sectors'}
      </button>
    </div>
  );
};

export default SectorTableContainer;
