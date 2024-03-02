// RadarChart.jsx
import React from 'react';
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const RadarChart = () => {
  const originalData = [5, 4, 2.5, 5, 4, 4.5, 5, 4];
  const data = {
    labels: ['', '', '', '', '', '', '',''],
    datasets: [
      {
        label: 'Kişisel İstatistikler',
        data: [...originalData, originalData[0]], // Veri noktalarını çiftleyerek çember gibi birleştir
        backgroundColor: [
          'rgba(34, 202, 236, 1)',
          'rgba(255, 99, 132, 1)', 
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)', 
          'rgba(153, 102, 255, 1)', 
          'rgba(255, 159, 64, 1)', 
        ],
        borderColor: [
          'rgba(34, 202, 236, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 0.5,
        pointRadius: 5, 
        pointHoverRadius: 8,
        fill: true,
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