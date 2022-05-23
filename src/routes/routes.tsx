import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Contracts from '../pages/Contracts';
import Home from '../pages/Home';
import Users from '../pages/Users';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/contratos" element={<Contracts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
