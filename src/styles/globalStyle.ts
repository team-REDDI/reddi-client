import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;

export default GlobalStyle;
