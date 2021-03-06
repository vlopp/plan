import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height:100%;
    margin:0;
    padding:0;
    color: ${(props) => props.theme.palette.text.primary}
  }
  * {
  box-sizing: border-box;
  }
    `;
