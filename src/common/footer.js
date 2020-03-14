import React from "react"
import styled from "styled-components"

import { fonts } from "./style"

const FooterContainer = styled.div`
  background: #fafafa;
  color: #555;
  padding: 10px 0;
  text-align: center;
  
  font-size: 0.8rem;
  font-family: ${fonts.header};
`

export default function() {
  return (
    <FooterContainer>
      Copyright © 2020 Web For Fun
    </FooterContainer>
  )
}
