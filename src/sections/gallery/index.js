import React from "react"
import styled from "styled-components"

import { Container, Heading, Center} from "../../common/components"
import { colors, fonts, media } from "../../common/style"

// import Modal from './modal'

const Section = styled.div`
  padding: 50px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  ${media.desktop`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export default function() {
  return (
    <Section>
      <Container>
        <Center>
          <Heading>บรรยากาศปีที่ผ่านมา</Heading>
        </Center>
        <br/>

        <Grid>
          {/* <Modal/>       */}
          <img width="100%" height="200px" src='https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg'></img>

          <img width="100%" height="200px" src='https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg'></img>
          <img width="100%" height="200px" src='https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg'></img>
          <img width="100%" height="200px" src='https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg'></img>
          <img width="100%" height="200px" src='https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg'></img>
          <img width="100%" height="200px" src='https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg'></img>
          <img width="100%" height="200px" src='https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg'></img>
          <img width="100%" height="200px" src='https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg'></img>

        </Grid>
        <br/>
      </Container>
    </Section>
  )
}