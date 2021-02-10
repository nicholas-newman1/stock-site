import React from 'react';
import BtnBar from '../BtnBar';
import './btnBarOne.css';

interface Btn {
  text: string;
  value?: string;
}

interface Props {
  btns: Btn[];
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const BtnBarOne: React.FC<Props> = ({ btns, setState }) => {
  return (
    <BtnBar
      setState={setState}
      render={(handleClick) => (
        <ul className='btn-bar-one'>
          {btns.map(({ text, value }, i) => (
            <li key={i} className='btn-bar-one__li'>
              <button
                className='btn-bar-one__btn'
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

export default BtnBarOne;
