import React from "react"

import {Container} from "../common/components"
import {GlobalStyle} from "../common/style"

import SEO from "../common/seo"
import Navbar from "../common/navbar"

const IndexPage = () => (
  <>
    <SEO title="Web For Fun Hackathon 2020" />
    <GlobalStyle />

    <Navbar />

    <Container>
      Testing
    </Container>
  </>
)

export default IndexPage
