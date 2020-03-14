import React from "react"
import styled from "styled-components"

import { Container, Heading, Center} from "../../common/components"
import { colors, fonts, media } from "../../common/style"
import image1 from "../../images/IMG_3858.jpg"
import image2 from "../../images/IMG_3879.jpg"
import image3 from "../../images/IMG_3890.jpg"
import image4 from "../../images/IMG_3905.jpg"
import image5 from "../../images/IMG_3916.jpg"
import image6 from "../../images/IMG_3921.jpg"
import image7 from "../../images/IMG_3931.jpg"
import image8 from "../../images/IMG_3971.jpg"

import Modal from "./Modal"

const Section = styled.div`
  padding: 50px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  
  ${media.phone`
    grid-template-columns: 1fr;
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
          <Modal src={image1}/>    
          <Modal src={image2}/>    
          <Modal src={image3}/>    
          <Modal src={image4}/>    
          <Modal src={image5}/>    
          <Modal src={image6}/>    
          <Modal src={image7}/>    
          <Modal src={image8}/>   
        </Grid>
        <br/>
      </Container>
    </Section>
  )
}
