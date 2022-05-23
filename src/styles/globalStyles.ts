import { createGlobalStyle } from 'styled-components';

export interface ThemeType {
  bg: string;
  bgAlpha: string;
  bg2: string;
  bg3: string;
  text: string;
  primary: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  *, *::before, *::after {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.bg2};
    color: ${({ theme }) => theme.text};
    letter-spacing: 0.5px;
    font-family: 'Poppins', sans-serif;
  }
`;
