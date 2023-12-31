import React from 'react';
import { Scatter } from 'react-chartjs-2';
import './historicalChart.css';

interface Props {
  data: HistoricalChartData;
  tooltipFormat: TooltipFormat;
  timeScaleFormat: TimeScaleFormat;
}

const HistoricalChart: React.FC<Props> = ({
  data,
  tooltipFormat,
  timeScaleFormat,
}) => {
  const options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: 'time',
          distribution: 'series',
          time: {
            displayFormats: {
              dayAndTime: 'MMM D h:mm: a', // custom format
            },
            unit: timeScaleFormat,
            stepSize: 10,
            tooltipFormat,
          },
          ticks: {
            maxTicksLimit: 3,
            maxRotation: 0,
            minRotation: 0,
            autoSkipPadding: 100,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            callback: (value: string) => `$${value}`,
          },
        },
      ],
    },
    elements: { point: { radius: 0 } },
    hover: { mode: 'index', intersect: false }, // show closest point on hover
    tooltips: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: ({ xLabel, yLabel }: { xLabel: string; yLabel: number }) => {
          return `${xLabel} | $${yLabel.toFixed(2)}`;
        },
      },
    },
    legend: { display: false },
  };

  const datasets = [
    {
      data: data,
      lineTension: 0,
      showLine: true,
      pointHoverBackgroundColor: 'rgba(0, 105, 196, 0.7)',
      pointHoverBorderColor: 'rgba(0, 105, 196, 0.7)',
      borderColor: 'rgba(0, 105, 196, 0.7)',
      fill: false,
    },
  ];

  return (
    <div className='historical-chart'>
      <Scatter data={{ datasets }} options={options} />
    </div>
  );
};

export default HistoricalChart;
