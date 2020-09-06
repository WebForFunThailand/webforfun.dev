import styled from "styled-components"
import { colors, fonts, media } from "./style"

export const Section = styled.div`
  padding: 50px 0;
  
  ${media.tablet`
    padding: 20px 0; 
  `}
`

export const Container = styled.div`
  width: 1100px;
  margin: auto auto;
  
  ${media.desktop`
    width: calc(100% - 15px * 2);
    margin: 0 15px;
  `}
`

export const P = styled.div`
  color: #555;
  font-family: ${fonts.content};
`

export const Heading = styled.h1`
  color: ${props => props.color ? props.color : colors.red};
  font-family: ${fonts.header}; 
  font-size: 1.8rem;
  font-weight: 800;
`

export const Center = styled.div`
  display: grid;
  justify-content: center;
`

export const Anchor = styled.a`
  font-family: ${fonts.header};
  color: #555;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition: 0.3s;
  
  &:hover {
    color: black;
  }
`

export const DisabledButton = styled.div`
  background: #ddd;
  border-radius: 4px;
  padding: 7px 20px;
  display: inline-block;
  
  font-size: ${props => props.big ? "1.2rem" : "1rem"};
  text-align: center;
  
  text-decoration: none;
  font-family: ${fonts.header};
`

export const LinkButton = styled.a`
  background: ${colors.red};
  border-radius: 4px;
  padding: 7px 20px;
  cursor: pointer;
  display: inline-block;
  
  font-size: ${props => props.big ? "1.2rem" : "1rem"};
  
  color: white;
  text-decoration: none;
  font-family: ${fonts.header};
`

