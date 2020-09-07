import React from "react"
import styled from "styled-components"

import { Center, Container, Heading, Section } from "../../common/components"
import { colors, fonts, media } from "../../common/style"

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
  top: 0;
  left: -80px;
`
const CloseQuote = styled(Quote)`
  bottom: -30px;
  right: -70px;
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
          <p style={{ textIndent: 45 }}>
            Web For Fun เป็นงาน Hackathon
            สำหรับผู้ที่มีความสนใจในด้านการพัฒนาเว็บไซต์ได้มาสร้างสรรค์ผลงานและเรียนรู้สิ่งใหม่ๆร่วมกัน
            โดยภายในงานจะมีเหล่านักพัฒนาที่มีประสบการณคอยให้คำแนะนำและคอยช่วยเหลือ
            เพื่อให้แต่ละทีมสามารถสร้าสรรค์ผลงานออกมาได้สนุกที่สุด
          </p>
        </About>
      </Container>
    </Section>
  )
}
