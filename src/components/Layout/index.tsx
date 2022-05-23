import React from 'react';
import Sidebar from '../SideBar';
import { SLayout, Content } from './styles';

const Layout = ({ children }: any) => {
  return (
    <SLayout>
      <Sidebar />
      <Content>{children}</Content>
    </SLayout>
  );
};

export default Layout;
