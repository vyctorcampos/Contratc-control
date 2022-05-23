import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { btnReset, variables } from '../../styles/variables';

type PropTypeSideBarContent = {
  isActive: any;
};

type PropTypeSideBar = {
  isOpen: boolean;
  onClick: () => void;
};

export const SidebarStyle = styled.div.attrs((props: PropTypeSideBar) => ({
  isOpen: props.isOpen,
  onClick: props.onClick,
}))`
  width: ${({ isOpen }: any) => (!isOpen ? `auto` : variables.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${variables.lgSpacing};
  position: relative;
`;

export const SidebarButton = styled.button.attrs((props: PropTypeSideBar) => ({
  isOpen: props.isOpen,
  onClick: props.onClick,
}))`
  ${btnReset};
  position: absolute;
  top: ${variables.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SidebarLogo = styled.div`
  width: 52px;
  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;
  margin-bottom: ${variables.lgSpacing};
`;

export const SidebarDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${variables.lgSpacing} 0;
`;

export const SidebarContent = styled.div.attrs(
  (props: PropTypeSideBarContent) => ({
    isActive: props.isActive,
    // eslint-disable-next-line prettier/prettier
  })
)`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3};
  border-radius: ${variables.borderRadius};
  margin: 8px 0;
  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${variables.smSpacing} - 2px) 0;
`;

export const SidebarIcon = styled.div`
  padding: ${variables.smSpacing} ${variables.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`;

export const SidebarText = styled.span`
  display: block;
  flex: 1;
  margin-left: ${variables.smSpacing};
`;

export const SidebarTheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const SidebarThemeLabel = styled.span`
  display: block;
  flex: 1;
`;

export const SidebarThemeToggler = styled.button.attrs(
  (props: PropTypeSideBarContent) => ({
    isActive: props.isActive,
    // eslint-disable-next-line prettier/prettier
  })
)`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.bg3 : theme.primary};
  position: relative;
`;

export const SidebarToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
