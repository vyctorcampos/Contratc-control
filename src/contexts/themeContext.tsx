import React, { createContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { IThemeContextType, ITheme } from '../@types/ITheme';
import { darkTheme, lightTheme } from '../styles/theme';

export const ThemeContext = createContext<IThemeContextType | null>(null);

const ThemeLocalProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = React.useState<ITheme>('light');

  const ThemeContextProvider = useMemo(
    () => ({
      theme: themeMode,
      changeTheme: setThemeMode,
    }),
    // eslint-disable-next-line prettier/prettier
    [themeMode, setThemeMode]
  );

  return (
    <ThemeContext.Provider value={ThemeContextProvider}>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeLocalProvider;
