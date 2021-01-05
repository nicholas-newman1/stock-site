import { useState, useEffect } from 'react';

// determine how timeScale and toolTips will be formatted based on timeframe

const useChartFormat = (timeframe: Timeframe) => {
  const [timeScaleFormat, setTimeScaleFormat] = useState('minute');
  const [tooltipFormat, setTooltipFormat] = useState('h:mm a');

  useEffect(() => {
    if (timeframe === '1D') {
      setTimeScaleFormat('minute');
      setTooltipFormat('h:mm a');
    } else if (timeframe === '5D' || timeframe === '1M') {
      setTimeScaleFormat('day');
      setTooltipFormat('MMM D h:mm a');
    } else {
      setTimeScaleFormat('month');
      setTooltipFormat('MMM D, YYYY');
    }
  }, [timeframe]);

  return [timeScaleFormat, tooltipFormat];
};

export default useChartFormat;
