import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const mockDonut = {
    series: [12, 5, 3],
    labels: ['0 e 1 Ano', '1 e 3 Anos', '3+ Anos'],
  };
  const options = {
    legend: {
      expandOnClick: true,
      show: true,
    },
  };

  return (
    <Chart
      options={{ ...options, labels: mockDonut.labels }}
      series={mockDonut.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
