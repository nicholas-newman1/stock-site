import React, { useEffect, useRef } from 'react';

interface Props {
  render: (
    handleClick: (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      value: string
    ) => void
  ) => JSX.Element;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const BtnBar: React.FC<Props> = ({ render, setState }) => {
  const btnBar = useRef<HTMLDivElement>(null);

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
    const firstBtn = btnBar.current!.querySelectorAll('button')[0];
    firstBtn.disabled = true;
  }, []);

  return <div ref={btnBar}>{render(handleClick)}</div>;
};

export default BtnBar;
