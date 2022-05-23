import React, { useState, useContext } from 'react';

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineLeft,
} from 'react-icons/ai';

import { useLocation } from 'react-router-dom';
import { ITheme, IThemeContextType } from '../../@types/ITheme';

import Logo from '../../assets/img/Logo.svg';
import { ThemeContext } from '../../contexts/themeContext';

import {
  SidebarStyle,
  SidebarButton,
  SidebarLogo,
  SidebarDivider,
  SidebarContent,
  SidebarLink,
  SidebarIcon,
  SidebarText,
  SidebarTheme,
  SidebarThemeLabel,
  SidebarThemeToggler,
  SidebarToggleThumb,
} from './styles';

const SidebarLinks = [
  {
    name: 'Página inicial',
    icon: <AiOutlineHome />,
    to: '/',
  },
  {
    name: 'Usuários',
    icon: <AiOutlineUser />,
    to: '/usuarios',
  },
  {
    name: 'Contratos',
    icon: <AiOutlineBook />,
    to: '/contratos',
  },
];

const Sidebar = () => {
  const { theme, changeTheme } = useContext(ThemeContext) as IThemeContextType;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <SidebarStyle>
      <>
        <SidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen(p => !p)}
        >
          <AiOutlineLeft />
        </SidebarButton>
      </>
      <SidebarLogo>
        <img
          src={Logo}
          alt="Logo da empresa Sogo, contém a palavra Sogo escrita dividindo as letras S O acima e G O abaixo"
        />
      </SidebarLogo>
      <SidebarDivider />
      {SidebarLinks.map(({ name, icon, to }) => (
        <SidebarContent key={name} isActive={pathname === to}>
          <SidebarLink
            to={to}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <SidebarIcon>{icon}</SidebarIcon>
            {sidebarOpen && <SidebarText>{name}</SidebarText>}
          </SidebarLink>
        </SidebarContent>
      ))}
      <SidebarDivider />
      <SidebarTheme>
        {sidebarOpen && <SidebarThemeLabel>Dark Mode</SidebarThemeLabel>}
        <SidebarThemeToggler
          isActive={theme === 'dark'}
          onClick={() => {
            const themeMethod = theme === 'dark' ? 'light' : 'dark';
            changeTheme(themeMethod);
          }}
        >
          <SidebarToggleThumb
            style={theme === 'dark' ? { right: '1px' } : {}}
          />
        </SidebarThemeToggler>
      </SidebarTheme>
    </SidebarStyle>
  );
};

export default Sidebar;
