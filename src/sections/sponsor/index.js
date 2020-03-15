import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Center, Container, Heading, LinkButton } from "../../common/components"
import { colors, fonts } from "../../common/style"
import { useSponsersImages } from "../../common/queries/sponsors"

const Section = styled.div`
  padding: 50px 0;
`

const SponsorLogo = styled.div`
  opacity: 0.8;
  transition: 0.3s;
  width: 165px;
  height: 80px;

  &:hover {
    opacity: 1;
  }
`

export default function() {
  const { clazy } = useSponsersImages()
  console.log(clazy)

  return (
    <Section>
      <Container>
        <Center>
          <Heading>ผู้สนับสนุน</Heading>
        </Center>

        <Center>
          <a href="https://www.facebook.com/ClazyCommunity/" target="_blank">
            <SponsorLogo>
              <Img fluid={clazy.source} />
            </SponsorLogo>
          </a>
        </Center>

        <br />
        <br />
        <Center>
          <LinkButton
            big
            href="https://docs.google.com/document/d/1G4FotxHMOKJmDVxnIU6Mmak8WHSUSAdWoEuwAC63_V4/edit?usp=sharing"
            target="_blank"
          >
            ร่วมเป็นผู้สนับสนุนกิจกรรม
          </LinkButton>
        </Center>
      </Container>
    </Section>
  )
}
