import React from "react"
import styled from "styled-components"
import { Center, Heading, LinkButton } from "../../common/components"
import { fonts } from "../../common/style"

const Section = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  width: 200px;
  margin-top: 50px;
  margin-bottom: 10px;
`

const Content = styled.div`
  color: #555;
  font-size: 1.6rem;
  font-family: ${fonts.header};
  margin-top: -20px;
`

export default function() {
  return (
    <Section>
      <div>
        <Center>
          <Logo src="./images/logo.png" />
        </Center>

        <Center>
          <Heading>2 - 3 พฤษภาคม 2563</Heading>
        </Center>
        <Center>
          <Content>@Clazy Cafe’ BTS Sanam Pao</Content>
        </Center>

        <br/>
        <br/>
        <Center>
          <LinkButton big href="#" target="_blank">สมัครเข้าร่วมกิจกรรม</LinkButton>
        </Center>
      </div>
    </Section>
  )
}