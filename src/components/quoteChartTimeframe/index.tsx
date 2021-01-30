import React, { useEffect, useRef } from 'react';
import './quoteChartTimeframe.css';

interface Props {
  setTimeframe: React.Dispatch<React.SetStateAction<Timeframe>>;
}

const QuoteChartTimeframe: React.FC<Props> = ({ setTimeframe }) => {
  const changeTimeframe = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // change disabled button to the one that was clicked
    const btn = e.target as HTMLButtonElement;
    const btns = Array.from(btn.parentNode!.children) as HTMLButtonElement[];
    btns.forEach((btn) => {
      btn.disabled = false;
    });
    btn.disabled = true;

    // set new timeframe
    setTimeframe(btn.innerText as Timeframe);
  };

  const timeframeBtns = ['1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'MAX'];

  const timeframe = useRef<HTMLInputElement>(null);
  useEffect(() => {
    // disable first timeframe button on mount
    const firstBtn = timeframe.current!.children[0] as HTMLButtonElement;
    firstBtn.disabled = true;
  }, []);

  return (
    <nav ref={timeframe} className='quote-timeframe'>
      {timeframeBtns.map((text, i) => (
        <button
          className='quote-timeframe__btn'
          onClick={changeTimeframe}
          key={i}
        >
          {text}
        </button>
      ))}
    </nav>
  );
};

export default QuoteChartTimeframe;
