import { Provider } from "react-redux";
import React from "react";
import { theme } from "../themes/theme";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core";
import { GlobalStyles } from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import '../i18n/init';

export const StandardConfiguration = (props) => {
  return (
    <React.StrictMode>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Provider store={props.store}>
              <GlobalStyles />
              {props.children}
            </Provider>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </React.StrictMode>
  );
};
