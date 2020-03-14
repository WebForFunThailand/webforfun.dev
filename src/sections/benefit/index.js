import React from "react"
import styled from "styled-components"

import { Container, Heading, Center } from "../../common/components"
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
  background: #ffffff;
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
        <br />

        <Grid>
          <CardContent>
            <Center>
              <img
                width="200px"
                height="200px"
                src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-childrens-day-cute-illustration-childrens-day-decoration-mountain-grass-png-image_3816991.jpg"
              ></img>
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
              <img
                width="200px"
                height="200px"
                src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-childrens-day-cute-illustration-childrens-day-decoration-mountain-grass-png-image_3816991.jpg"
              ></img>
            </Center>
            <Center>
              <Heading color={colors.blue}>Learning</Heading>
            </Center>
            <Content>
              ภายในงานมีการจัด Workshop ให้ความรู้ด้าน Coding
              ได้ความรู้กลับไปนอนกอดที่บ้านแน่นอน!
            </Content>
          </CardContent>
          <CardContent>
            <Center>
              <img
                width="200px"
                height="200px"
                src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-childrens-day-cute-illustration-childrens-day-decoration-mountain-grass-png-image_3816991.jpg"
              ></img>
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
