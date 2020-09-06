import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Container, Heading, Center, Section } from "../../common/components"
import { colors, fonts, media } from "../../common/style"
import { useBenefitsImages } from "../../common/queries/benefits"

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
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 48px 24px;
  transition: 0.7s;
  
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }

  max-width: 350px;
`

const Content = styled.p`
  font-family: ${fonts.content};
  text-align: center;
  color: #555;
  margin: 0;
`

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
`

export default function() {
  const { coding, learning, meeting } = useBenefitsImages()

  return (
    <Section>
      <Container>
        <Center>
          <Heading>สิ่งที่จะได้รับในงาน</Heading>
        </Center>
        <br />

        <Grid>
          <CardContent>
            <Center>
              <ImageContainer>
                <Img fluid={coding.source} />
              </ImageContainer>
            </Center>
            <Center>
              <Heading color={colors.orange}>Coding</Heading>
            </Center>
            <Content>
              ผู้เข้าร่วมงานจะได้ลงมือเขียนโค้ดจริง ๆ
              ร่วมกับทีมเพื่อทำให้โปรเจคเสร็จสิ้น
            </Content>
          </CardContent>
          <CardContent>
            <Center>
              <ImageContainer>
                <Img fluid={learning.source} />
              </ImageContainer>
            </Center>
            <Center>
              <Heading color={colors.blue}>Learning</Heading>
            </Center>
            <Content>
              ภายในงานมีการจัด Workshop ต่าง ๆ ให้ความรู้ด้าน Coding และมีพี่ ๆ
              Staff ประจำทีมคอยให้ความช่วยเหลือ
              เพื่อให้มั่นใจว่าทุกคนได้ความรู้กลับไปนอนกอดที่บ้านแน่นอน!
            </Content>
          </CardContent>
          <CardContent>
            <Center>
              <ImageContainer>
                <Img fluid={meeting.source} />
              </ImageContainer>
            </Center>
            <Center>
              <Heading color={colors.red}>Meeting</Heading>
            </Center>
            <Content>
              พบปะกับเพื่อนร่วมทีมและคนอื่น ๆ ที่ร่วมกิจกรรมภายในงาน
              รวมไปถึงเหล่า Staff ผู้มากฝีมือและเหล่า Developer ผู้เชี่ยวชาญ
            </Content>
          </CardContent>
        </Grid>
      </Container>
    </Section>
  )
}
