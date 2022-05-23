import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };
  const mockBar = {
    labels: {
      categories: ['Resumo'],
    },
    series: [
      {
        name: 'Quantidade de contratos',
        data: [5],
      },
      {
        name: 'Numero de contratos a vencer',
        data: [3],
      },
      {
        name: 'Tempo medio de prestação de serviço',
        data: [13],
      },
    ],
  };
  return (
    <Chart
      options={{ ...options, xaxis: mockBar.labels }}
      series={mockBar.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
