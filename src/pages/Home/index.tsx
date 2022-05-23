import React from 'react';
import BarChart from '../../components/BarChart';
import ContratcTables from '../../components/ContratcTables';
import DonutChart from '../../components/DonutChart';

const Home = () => {
  return (
    <>
      <h1 className=" table-responsive text-primary py-3">Dashboard</h1>
      <div className="  row px-50">
        <div className="col-sm-10">
          <h5 className="  text-center text-secondary">Resumo Grafico</h5>
          <BarChart />
        </div>
        <div className="col-sm-10">
          <h5 className=" text-center text-secondary">
            Media do tempo de contrato
          </h5>
          <DonutChart />
        </div>
      </div>
    </>
  );
};

export default Home;
