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
import { media } from "../../common/style"
import { useSponsersImages } from "../../common/queries/sponsors"

const SponsorLogo = styled.div`
  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & ${SponsorLogo} {
    margin: 0 15px;
  }

  ${media.tablet`
    flex-direction: column;

    & ${SponsorLogo} {
      margin: 15px 0;
    }
  `}
`

const enableSponsorAcceptionButton = false

export default function() {
  const { clazy, cleverse, dev_community } = useSponsersImages()

  return (
    <Section>
      <Container>
        <Center>
          <Heading>ผู้สนับสนุน</Heading>
        </Center>

        <LogoContainer>
          <a href="https://cleverse.com/" target="_blank">
            <SponsorLogo style={{ width: 180 }}>
              <Img fluid={cleverse.source} />
            </SponsorLogo>
          </a>
          <a href="https://www.facebook.com/ClazyCommunity/" target="_blank">
            <SponsorLogo style={{ width: 140 }}>
              <Img fluid={clazy.source} />
            </SponsorLogo>
          </a>
          <SponsorLogo style={{ width: 210 }}>
            <Img fluid={dev_community.source} />
          </SponsorLogo>
        </LogoContainer>
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
