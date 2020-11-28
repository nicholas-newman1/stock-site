import React from 'react';
import './headerWarning.css';

const HeaderWarning = () => {
  return (
    <div className='header-warning'>
      <div className='container'>
        WARNING: This website is using dummy data (likely out of API requests
        for the day). Come back tomorrow for real data!
      </div>
    </div>
  );
};

export default HeaderWarning;
