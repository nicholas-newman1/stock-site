import React from 'react';
import ReactToolTip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './headerWarning.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../../reducers/rootReducer';

const HeaderWarning: React.FC = () => {
  const realData = useSelector((state: AppState) => state.realData);

  return (
    <div className='header-warning'>
      <div data-tip={realData.error} className='container'>
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
