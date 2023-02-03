import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'FlowerSalt';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/FlowerSalt.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
${reset}
*{
    box-sizing: border-box;
}
a {
    color: inherit;
    text-decoration: none;
}
input, button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: var(--font);
    padding: 0;
    margin: 0;
    cursor: pointer;
}
textarea {
  font-family: var(--font);
  padding: 0;
  margin: 0;
  resize: none;

}

::placeholder {
  font-family: var(--font);
}
label {
  color: var(--super-gray);
}
ol, ul, li {
    list-style: none;
}
img{
    display: block;
}
:root {
    --font: 'GmarketSansMedium';
    --black: #1C1C1C;
    --red: #FF1818;
    --green: #50c927;
    --light-gray: #E8E8E8;
}
body {
  text-align: center;
}

.ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
}
`;

export default GlobalStyle;
