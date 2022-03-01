/* eslint-disable */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 300;
  src: url('styles/fonts/NotoSansKR-Light.otf') format('opentype');
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 400;
  src: url('styles/fonts/NotoSansKR-Regular.otf') format('opentype');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 500;
  src: url('styles/fonts/NotoSansKR-Medium.otf') format('opentype');
}

@font-face {
  font-family: 'Noto Sans KR';
  font-weight: 700;
  src: url('styles/fonts/NotoSansKR-Bold.otf') format('opentype');

}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  background: #e9ecef;
}

`;

export default GlobalStyle;
