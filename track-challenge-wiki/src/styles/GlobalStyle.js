import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    background-color: #f4f4f4;
    color: #333;
  }
`;

export default GlobalStyle;