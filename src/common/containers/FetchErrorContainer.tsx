import React from 'react';
import { useDispatch } from 'react-redux';
import { disableRealData } from '../redux/modules/realData';
import FetchError from '../components/FetchError';

interface Props {
  error: string;
}

const FetchErrorContainer: React.FC<Props> = ({ error }) => {
  const dispatch = useDispatch();

  return (
    <FetchError
      error={error}
      enableDummyData={() => dispatch(disableRealData())}
    />
  );
};

export default FetchErrorContainer;
