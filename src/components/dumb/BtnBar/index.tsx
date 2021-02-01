import React, { useEffect, useRef } from 'react';
import './btnBar.css';

interface Btn {
  text: string;
  value?: string;
}

interface Props {
  btns: Btn[];
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const ButtonBar: React.FC<Props> = ({ btns, setState }) => {
  const btnBar = useRef<HTMLUListElement>(null);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: string
  ) => {
    // reset disabled btn
    const btns = Array.from(btnBar.current!.querySelectorAll('button'));
    btns.forEach((btn) => (btn.disabled = false));

    // disable clicked btn
    const btn = e.target as HTMLButtonElement;
    btn.disabled = true;

    // update state
    setState(value);
  };

  useEffect(() => {
    // disable first button on mount
    const firstBtn = btnBar.current!.firstChild!
      .firstChild as HTMLButtonElement;
    firstBtn.disabled = true;
  }, []);

  return (
    <ul ref={btnBar} className='btn-bar'>
      {btns.map(({ text, value }, i) => (
        <li key={i} className='btn-bar__li'>
          <button
            className='btn-bar__btn'
            onClick={(e) => handleClick(e, value ? value : text)}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonBar;
