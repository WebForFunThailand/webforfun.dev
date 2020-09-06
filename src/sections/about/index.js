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
          <p style={{textIndent: 45}}>
            งาน Web For Fun เป็นงาน Hackathon สำหรับผู้เริ่มต้นที่มีความสนใจในด้านการพัฒนาเว็บไซต์ ให้ได้พัฒนาฝีมือ, เรียนรู้จากผู้มีประสบการณ์ และพบปะเพื่อน ๆ ที่มีความชอบเหมือนกัน โดยในงานจะมีเหล่านักพัฒนาที่มีประสบการณ์แล้วคอยให้คำแนะนำ และช่วยเหลือในแต่ละทีม นอกจากนี้ภายในงานจะมี Workshop ต่างๆ เพื่อให้นักพัฒนาแต่ละคนสามารถคิดไอเดียออกมาได้สนุกที่สุด
          </p>
        </About>
      </Container>
    </Section>
  )
}
