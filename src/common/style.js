// fonts, colors, styled-component helper function
import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`  
  @font-face {
    font-family: HijoPutaPeligroso;
    src: url("./fonts/HijoPutaPeligroso.otf") format("opentype");
  }
  
  ::-webkit-scrollbar {
    width: 0px;
  }

  p {
    line-height: 30px;
  }

  body {
    margin: 0;
    font-size: 16px;
    font-family: sans-serif;
  } 

  * {
    box-sizing: border-box;
  } 

  #defaultCanvas0 { 
    display: none !important; 
  }

`

export const fonts = {
  content: "'Sarabun', sans-serif",
  header: "'Sukhumvit Set', 'Kanit', sans-serif",
  logo: "'HijoPutaPeligroso', sans-serif",
}

export const colors = {
  red: "#ee1365",
  blue: "#0f68f7",
  orange: "#f67d03",
}

// helper function
const sizes = {
  giant: 1440,
  desktop: 1200,
  tablet: 900,
  phone: 480,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const pxSize = sizes[label]
  accumulator[label] = (...args) => css`
    @media (max-width: ${pxSize}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
