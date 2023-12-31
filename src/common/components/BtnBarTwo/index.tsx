import React from 'react';
import BtnBar from '../BtnBar';
import './btnBarTwo.css';

interface Btn {
  text: string;
  value?: string;
}

interface Props {
  btns: Btn[];
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const BtnBarTwo: React.FC<Props> = ({ btns, setState }) => {
  return (
    <BtnBar
      setState={setState}
      render={(handleClick) => (
        <ul className='btn-bar-two'>
          {btns.map(({ text, value }, i) => (
            <li key={i} className='btn-bar-two__li'>
              <button
                className='btn-bar-two__btn'
                onClick={(e) => handleClick(e, value ? value : text)}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      )}
    />
  );
};

export default BtnBarTwo;
