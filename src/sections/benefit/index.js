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

  margin-bottom: 15px;
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
              <Heading color={colors.orange}>Inventing</Heading>
            </Center>
            <Content>
              ผู้เข้าร่วมงานจะได้สร้างสรรค์ผลงานร่วมกับทีมของตนเอง โดยไม่ต้องสนว่าไอเดียจะขายได้ไหม ขอแค่ใช้งานได้จริง และผู้ร่วมงานสนุกที่จะสร้างผลงานก็พอ
            </Content>
          </CardContent>
          <CardContent>
            <Center>
              <ImageContainer>
                <Img fluid={learning.source} />
              </ImageContainer>
            </Center>
            <Center>
              <Heading color={colors.blue}>Experimenting</Heading>
            </Center>
            <Content>
              ทางเราอยากให้งาน Hackathon ของเราเป็นเหมือน Playground ที่ให้ทุกๆคนได้มาลองฝึก Skill ใหม่ๆกัน โดยภายในงานจะมีเหล่านักพัฒนาที่มีประสบการณ์คอยให้ความช่วยเหลือตลอดกิจกรรม
            </Content>
          </CardContent>
          <CardContent>
            <Center>
              <ImageContainer>
                <Img fluid={meeting.source} />
              </ImageContainer>
            </Center>
            <Center>
              <Heading color={colors.red}>Socializing</Heading>
            </Center>
            <Content>
              พบปะกับเพื่อนร่วมทีม, ผู้เข้าร่วมงานคนอื่น ๆ และทีมงานที่มีความสนใจคล้าย ๆ กัน
            </Content>
          </CardContent>
        </Grid>
      </Container>
    </Section>
  )
}
