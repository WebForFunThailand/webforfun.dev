import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import {
  Center,
  Container,
  Heading,
  LinkButton,
  Section,
} from "../../common/components"
import { useSponsersImages } from "../../common/queries/sponsors"

const SponsorLogo = styled.div`
  opacity: 0.8;
  transition: 0.3s;
  width: 165px;
  height: 80px;

  &:hover {
    opacity: 1;
  }
`

const enableSponsorAcceptionButton = false

export default function() {
  const { clazy } = useSponsersImages()

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
        {enableSponsorAcceptionButton ? (
          <>
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
          </>
        ) : null}
      </Container>
    </Section>
  )
}
