import React from 'react';
import BtnBarOne from '../../../../common/components/BtnBarOne';
import HistoricalChart from '../../../../common/components/HistoricalChart';
import './quoteChart.css';

interface Props {
  chartData: FormattedHistoricalPrices;
  timeScaleFormat: TimeScaleFormat;
  tooltipFormat: TooltipFormat;
  setTimeframe: React.Dispatch<React.SetStateAction<Timeframe>>;
}

const QuoteChart: React.FC<Props> = ({
  chartData,
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
      {chartData.length ? (
        <HistoricalChart
          data={chartData}
          timeScaleFormat={timeScaleFormat}
          tooltipFormat={tooltipFormat}
        />
      ) : (
        <h2>No Chart Data Available</h2>
      )}
    </div>
  );
};

export default QuoteChart;
