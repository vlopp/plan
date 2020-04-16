import { createMuiTheme, Theme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface ThemeOptions extends Partial<CustomTheme> {}
  export interface Theme extends CustomTheme {}
}

interface CustomTheme {
  customZIndexes: {
    settingsOverlay: number;
  };
  scrollbarWidth: string;
}

export const theme = createMuiTheme({
  palette: { type: "dark" },
  scrollbarWidth: "16px",
});