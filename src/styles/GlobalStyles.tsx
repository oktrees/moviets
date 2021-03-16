import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: Oswald, 'Noto Sans KR', sans-serif;
  }
  *:focus {
    outline: 0;
    outline: none;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #222;
  }
  a {
    text-decoration: none;
    color: white;
  }
`

export default GlobalStyles;