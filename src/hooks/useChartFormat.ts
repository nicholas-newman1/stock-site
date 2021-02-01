import { useState, useEffect } from 'react';

// determine how timeScale and toolTips will be formatted based on timeframe

const useChartFormat = (timeframe: Timeframe) => {
  const [timeScaleFormat, setTimeScaleFormat] = useState<TimeScaleFormat>(
    'hour'
  );
  const [tooltipFormat, setTooltipFormat] = useState<TooltipFormat>('h:mm a');

  useEffect(() => {
    if (timeframe === '1D') {
      setTimeScaleFormat('hour');
      setTooltipFormat('h:mm a');
    } else if (timeframe === '5D' || timeframe === '1M') {
      setTimeScaleFormat('day');
      setTooltipFormat('MMM D h:mm a');
    } else {
      setTimeScaleFormat('month');
      setTooltipFormat('MMM D, YYYY');
    }
  }, [timeframe]);

  return { timeScaleFormat, tooltipFormat };
};

export default useChartFormat;
