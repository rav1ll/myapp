import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  * {
    font-family: 'Arial', serif !important;
    box-sizing: content-box;
  }
`;
