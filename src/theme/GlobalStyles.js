import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }

`;

export default GlobalStyle;
