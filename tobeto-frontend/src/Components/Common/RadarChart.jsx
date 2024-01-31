// RadarChart.jsx
import React from 'react';
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const RadarChart = () => {
  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        label: 'Kişisel İstatistikler',
        data: [5,5,5,5,5,5,5,5],
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
