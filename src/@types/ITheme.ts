export type ITheme = 'light' | 'dark';

export type IThemeContextType = {
  theme: ITheme;

  changeTheme: (theme: ITheme) => void;
};
