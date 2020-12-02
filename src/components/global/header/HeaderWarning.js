import React, { useContext } from 'react';
import ReactToolTip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { RealDataContext } from '../../../context/RealDataContext';
import './headerWarning.css';

const HeaderWarning = () => {
  // error is stored in RealDataContext when a fetch request fails
  const { error } = useContext(RealDataContext);

  return (
    <div className='header-warning'>
      <div data-tip={error} className='container'>
        WARNING: This website is using dummy data.
        <FontAwesomeIcon
          className='header-warning__icon'
          icon={faQuestionCircle}
        />
        <ReactToolTip
          className='tooltip'
          place='bottom'
          multiline={true}
          clickable={true}
        />
      </div>
    </div>
  );
};

export default HeaderWarning;
