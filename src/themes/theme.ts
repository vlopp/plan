import { createMuiTheme, Theme } from "@material-ui/core/styles";

interface CustomTheme {
  customZIndexes: {
    settingsOverlay: number;
  };
  scrollbarWidth: string;
}

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface ThemeOptions extends Partial<CustomTheme> {}
  export interface Theme extends CustomTheme {}
  //export interface DefaultTheme extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme, CustomTheme {}
}

export const theme = createMuiTheme({
  palette: { type: "dark" },
  scrollbarWidth: "16px",
});
