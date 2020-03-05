// fonts, colors, styled-component helper function
import styled, {createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: 16px;
    font-family: sans-serif;
  } 
  * {
    box-sizing: border-box;
  } 
`

export const font = {
};

export const colors = {
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

