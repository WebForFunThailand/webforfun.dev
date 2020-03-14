import React from "react"
import styled from "styled-components"

import CodingImage from "../../images/coding.png"
import LearningImage from "../../images/learning.png"
import MeetingImage from "../../images/meeting.png"
import { Container, Heading, Center} from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-gap: 20px;
    
    & > div {
      margin: auto auto;
    }
  `}
`

const CardContent = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 48px 24px;
  
  max-width: 350px;
`

const Content = styled.p`
  font-family: ${fonts.content}; 
  text-align: center;
  margin: 0; 
`

export default function() {
  return (
    <Section>
      <Container>
      <Center>
        <Heading>สิ่งที่จะได้รับในงาน</Heading>
      </Center>
      <br/>

      <Grid>
        <CardContent>
          <Center>
            <img width="200px" height="200px" src={CodingImage}></img>
          </Center>
          <Center>
            <Heading color={colors.orange} >Coding</Heading>
          </Center>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Content>
        </CardContent>
        <CardContent>
          <Center>
            <img width="200px" height="200px" src={LearningImage}></img>
          </Center>
          <Center>
            <Heading color={colors.blue}>Learning</Heading>
          </Center>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Content>
        </CardContent>
        <CardContent>
          <Center>
            <img width="200px" height="200px" src={MeetingImage}></img>
          </Center>
          <Center>
            <Heading color={colors.red}>Meeting</Heading>
          </Center>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Content>
        </CardContent>
      </Grid>
      </Container>
    </Section>
  )
}