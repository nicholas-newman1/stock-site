import React from 'react';
import './fetchError.css';

interface Props {
  error: string;
  enableDummyData: () => void;
}

const FetchError: React.FC<Props> = ({ error, enableDummyData }) => {
  return (
    <div className='fetch-error'>
      <p className='fetch-error__msg'>{error}</p>
      <button
        onClick={enableDummyData}
        className='fetch-error__btn btn btn-outline-blue btn-small'
      >
        Use Dummy Data
      </button>
    </div>
  );
};

export default FetchError;
