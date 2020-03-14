import styled from "styled-components"
import { colors, fonts } from "./style"

export const Container = styled.div`
  width: 1100px;
  margin: auto auto;
`

export const Heading = styled.h1`
  color: ${colors.red};
  font-family: ${fonts.header}; 
  font-size: 1.8rem;
  font-weight: 500;
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

export const LinkButton = styled.a`
  background: ${colors.red};
  border-radius: 4px;
  padding: 7px 20px;
  cursor: pointer;
  display: inline-block;
  
  color: white;
  text-decoration: none;
  font-family: ${fonts.header};
`

