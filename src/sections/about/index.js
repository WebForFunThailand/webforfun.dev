import React from "react"
import styled from "styled-components"

import { Center, Container, Heading } from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
  padding-top: 20px;
  
  overflow: hidden;
`

const About = styled.p`
  font-family: ${fonts.content};
  font-size: 1.2rem;
  color: #555;
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
  
  width: 60%;
  
  ${media.tablet`
    width: 80%;
  `}
  
  ${media.phone`
    width: 100%;
    margin: 0;
    padding: 20px;
  `}
`

const Quote = styled.div`
  position: absolute;   
  color: ${colors.blue};
  font-size: 100px;
  
  ${media.phone`
    display: none;
  `}
`
const OpenQuote = styled(Quote)`
  top: -50px;
  left: -50px;
`
const CloseQuote = styled(Quote)`
  bottom: -80px;
  right: -50px;
`

export default function() {
  return (
    <Section>
      <Container>
        <Center>
          <Heading color={colors.orange}>Web For Fun คืออะไร?</Heading>
        </Center>
        <About>
          <OpenQuote>“</OpenQuote>
          <CloseQuote>”</CloseQuote>
          <div>
          ค่าย Web For Fun เป็นค่าย 2 วัน 1 คืน สำหรับ Web Developer มือใหม่ ที่ต้องการสัมผัสประสบการณ์ Hackaton ที่ผู้เข้าร่วมจะต้องใช้ความร่วมมือ ร่วมใจกันสร้างผลงานเว็บไซต์ของตนเองตามไอเดียของแต่ละทีม
          </div>
        </About>
      </Container>
    </Section>
  )
}