import React from "react"
import styled from "styled-components"

import { Container, Heading, Center} from "../../common/components"
import { colors, fonts } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
`
const SectionCard = styled.div`
  display: flex;
  justify-content: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`

const CardContent = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 48px 24px;
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
            <img width="200px" height="200px" src='https://png.pngtree.com/png-clipart/20190614/original/pngtree-childrens-day-cute-illustration-childrens-day-decoration-mountain-grass-png-image_3816991.jpg'></img>
          </Center>
          <Center>
            <Heading color={colors.orange} >Coding</Heading>
          </Center>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Content>
        </CardContent>
        <CardContent>
          <Center>
            <img width="200px" height="200px" src='https://png.pngtree.com/png-clipart/20190614/original/pngtree-childrens-day-cute-illustration-childrens-day-decoration-mountain-grass-png-image_3816991.jpg'></img>
          </Center>
          <Center>
            <Heading color={colors.blue}>Learing</Heading>
          </Center>
          <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Content>
        </CardContent>
        <CardContent>
          <Center>
            <img width="200px" height="200px" src='https://png.pngtree.com/png-clipart/20190614/original/pngtree-childrens-day-cute-illustration-childrens-day-decoration-mountain-grass-png-image_3816991.jpg'></img>
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