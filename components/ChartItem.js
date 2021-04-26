import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartItem = ({ tableData }) => {
  const chartOption = {
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
    tooltips: {
      mode: 'label',

    },
    hover: {
      mode: 'dataset',
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          show: true,
          labelString: 'Times',
        },
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          show: true,
          labelString: 'Values',
        },
        ticks: {
          suggestedMin: -10,
          suggestedMax: 25,
        },
      }],
    },
  };

  const extractData = (currentData) => {
    const chartData = [];
    Object.keys(currentData.current.data.TK1)
      .forEach((key) => {
        if (key.slice(0, 4) === process.env.NEXT_PUBLIC_FILTER_KEY) {
          chartData.push({ [key]: currentData.current.data.TK1[key] });
        }
      });
    return chartData;
  };

  const createDataSet = (rawData) => ({

    labels: Object.values(rawData[0])[0].times,
    datasets: rawData.map((el) => ({
      label: Object.keys(el)[0],
      data: Object.values(el)[0].values,
      fill: false,
      borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    })),
  });

  const processedData = tableData && createDataSet(extractData(tableData));

  return (
    <div style={{ width: 600, height: 400 }}>
      <Line id="myChart" data={processedData} options={chartOption} />
      <p>
        on Click of Label on top you can hide that data from chart
      </p>
    </div>
  );
};
export default ChartItem;
