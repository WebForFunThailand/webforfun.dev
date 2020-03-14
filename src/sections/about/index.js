import React from "react"
import styled from "styled-components"

import { Container, Heading } from "../../common/components"
import { colors, fonts } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
`

const About = styled.p`
  font-family: ${fonts.content};
  width: 60%;
  color: #555;
  margin: 0 auto;
  margin-top: 60px;
  position: relative;
`

const Quote = styled.div`
  position: absolute;   
  color: ${colors.blue};
  font-size: 100px;
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
        <Heading>Web For Fun คืออะไร?</Heading>
        <About>
          <OpenQuote>“</OpenQuote>
          <CloseQuote>”</CloseQuote>
          <span>
          ค่าย Web For Fun เป็นค่าย 2 วัน 1 คืน สำหรับ Web Developer มือใหม่ ที่ต้องการสัมผัสประสบการณ์ Hackaton ที่ผู้เข้าร่วมจะต้องใช้ความร่วมมือ ร่วมใจกันสร้างผลงานเว็บไซต์ของตนเองตามไอเดียของแต่ละทีม
          </span>
        </About>
      </Container>
    </Section>
  )
}