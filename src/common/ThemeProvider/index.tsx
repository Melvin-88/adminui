import React, { ReactElement, ReactNode, useEffect, useMemo } from 'react';
import { createTheme, StylesProvider, Theme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import merge from 'lodash.merge';

// Should be imported before the palette to properly load css variables
import '^styles/globals';

import props from './configs/prop';
import overrides from './configs/overrides';
import palette from './configs/palette';

export const defaultTheme: ThemeOptions = {
  props,
  overrides,
  palette,
};

export interface IThemeProviderProps {
  theme?: Partial<ThemeOptions>;
  children: ReactNode;
}

const ThemeProvider = ({ theme, children }: IThemeProviderProps): ReactElement => {
  const computedTheme = useMemo(
    (): Theme => (
      createTheme(
        merge(
          defaultTheme,
          theme,
        ),
      )
    ),
    [theme],
  );

  useEffect(
    (): (() => void) => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';

      document.head.appendChild(fontLink);

      return (): void => {
        document.head.removeChild(fontLink);
      };
    },
    [],
  );

  return (
    <StylesProvider injectFirst>
      <CssBaseline />

      <MuiThemeProvider theme={computedTheme}>
        {children}
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
