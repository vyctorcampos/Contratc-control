import React from 'react';
import BarChart from '../../components/BarChart';
import ContratcTables from '../../components/ContratcTables';
import DonutChart from '../../components/DonutChart';

const Home = () => {
  return (
    <div>
      <h1 className=" table-responsive text-primary py-3">Dashboard</h1>
      <div className="  row px-3">
        <div className="col-sm-6">
          <h5 className="  text-center text-secondary">Grafico em Barra</h5>
          <BarChart />
        </div>
        <div className="col-sm-6">
          <h5 className=" text-center text-secondary">Grafico em Pizza</h5>
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
