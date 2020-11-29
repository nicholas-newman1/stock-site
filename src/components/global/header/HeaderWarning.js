import React, { useContext } from 'react';
import ReactToolTip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { RealDataContext } from '../../../context/RealDataContext';
import './headerWarning.css';

const HeaderWarning = () => {
  const { error } = useContext(RealDataContext);

  return (
    <div className='header-warning'>
      <div className='container'>
        WARNING: This website is using dummy data.
        <FontAwesomeIcon
          className='header-warning__icon'
          data-tip={error}
          icon={faQuestionCircle}
        />
        <ReactToolTip />
      </div>
    </div>
  );
};

export default HeaderWarning;
