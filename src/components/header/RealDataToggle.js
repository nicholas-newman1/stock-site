import React, { useContext } from 'react';
import { RealDataContext } from '../../context/RealDataContext';
import '../../css/header/realDataToggle.css';

const RealDataToggle = () => {
  const { realData, setRealData } = useContext(RealDataContext);

  return (
    <div className='real-data-container'>
      <label className='real-data-toggle'>
        <input
          className='real-data-checkbox'
          type='checkbox'
          checked={realData}
          onChange={() => {
            setRealData(!realData);
          }}
        />
        <span className='real-data-slider'></span>
      </label>
      <span className='real-data-label'>Real Data</span>
    </div>
  );
};

export default RealDataToggle;
