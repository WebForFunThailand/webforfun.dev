// fonts, colors, styled-component helper function
import {createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Kanit&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Sarabun&display=swap');
  
  @font-face {
    font-family: HijoPutaPeligroso;
    src: url("./fonts/HijoPutaPeligroso.otf") format("opentype");
  }
  
  body {
    margin: 0;
    font-size: 16px;
    font-family: sans-serif;
  } 
  * {
    box-sizing: border-box;
  } 
`

export const fonts = {
  content: "'Sarabun', sans-serif",
  header: "'Kanit', sans-serif",
  logo: "'HijoPutaPeligroso', sans-serif",
};

export const colors = {
  red: "#ee1365",
  blue: "#0f68f7",
  orange: "#f67d03",
};

// helper function
const sizes = {
  giant: 1440,
  desktop: 1200,
  tablet: 768,
  phone: 480,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const pxSize = sizes[label];
  accumulator[label] = (...args) => css`
    @media (max-width: ${pxSize}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

