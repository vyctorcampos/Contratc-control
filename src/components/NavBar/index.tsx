import React from 'react';
import logo from '../../assets/img/Logo.svg';

const NavBar = () => {
  return (
    <div className=" table-responsive d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shodow-sm">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <h1 className="py-3">
            <img src={logo} alt="Sogo contratos" width="120" />
            Sogo contratos
          </h1>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
