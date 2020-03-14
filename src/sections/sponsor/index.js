import React from "react"
import styled from "styled-components"

import ClazyCafeLogo from "../../images/clazy.png"

import { Center, Container, Heading, LinkButton } from "../../common/components"
import { colors, fonts } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
`

const SponsorLogo = styled.img`
  opacity: 0.8;
  transition: 0.3s;
  
  &:hover {
    opacity: 1;
  }
`

export default function() {
  return (
    <Section>
      <Container>
        <Center>
          <Heading>ผู้สนับสนุน</Heading>
        </Center>

        <Center>
          <a href="https://www.facebook.com/ClazyCommunity/" target="_blank">
            <SponsorLogo src={ClazyCafeLogo} alt="Clazy Cafe'" height="80px" />
          </a>
        </Center>

        <br/>
        <br/>
        <Center>
          <LinkButton big href="#" target="_blank">ร่วมเป็นผู้สนับสนุนค่าย</LinkButton>
        </Center>
      </Container>
    </Section>
  )
}