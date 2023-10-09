// src/components/Chart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <div className="chart-container">
      <Bar data={data} />
    </div>
  );
};

export default Chart;
