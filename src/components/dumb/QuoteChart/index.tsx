import React from 'react';
import BtnBarOne from '../BtnBarOne';
import HistoricalChart from '../HistoricalChart';
import './quoteChart.css';

interface TimeframeBtn {
  text: Timeframe;
}

interface Props {
  chartData: FormattedHistoricalPrices;
  loading: boolean;
  timeScaleFormat: TimeScaleFormat;
  tooltipFormat: TooltipFormat;
  setTimeframe: React.Dispatch<React.SetStateAction<Timeframe>>;
}

const QuoteChart: React.FC<Props> = ({
  chartData,
  loading,
  timeScaleFormat,
  tooltipFormat,
  setTimeframe,
}) => {
  const timeframeBtns: { text: Timeframe }[] = [
    { text: '1D' },
    { text: '5D' },
    { text: '1M' },
    { text: '6M' },
    { text: 'YTD' },
    { text: '1Y' },
    { text: '5Y' },
    { text: 'MAX' },
  ];

  return (
    <div className='quote-chart'>
      <BtnBarOne btns={timeframeBtns} setState={setTimeframe} />
      <HistoricalChart
        data={chartData}
        loading={loading}
        timeScaleFormat={timeScaleFormat}
        tooltipFormat={tooltipFormat}
      />
    </div>
  );
};

export default QuoteChart;
