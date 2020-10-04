import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons"

import {
  Anchor,
  Center,
  Container,
  Heading,
  Section,
} from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 2fr;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > div:nth-child(1) {
      margin-bottom: 30px; 
    }
  `}
`

const ContactList = styled.div`
  font-size: 1.2rem;
  font-family: ${fonts.header};

  & > div {
    margin-bottom: 10px;
  }

  & ${Anchor} {
    color: black !important;
  }
`

const WidthContainer = styled.div`
  width: 80%;
  margin: auto auto;

  ${media.tablet`
    width: 100%;
  `}
`

const ContactItem = styled.div`
  & > svg {
    margin-right: 5px;
    transform: translateY(1px);
  }
`

const FacebookFrame = styled.iframe`
  max-width: 340px;
`

export default function() {
  const width = Math.min(340, document.body.clientWidth - 30)
  return (
    <Section>
      <Container>
        <Center>
          <Heading color={colors.blue}>ติดต่อเรา</Heading>
        </Center>
        <br />

        <WidthContainer>
          <Grid>
            <FacebookFrame
              src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwebforfun%2F&tabs=timeline&width=${width}&height=215&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=839660299554083`}
              height="215"
              width={width}
              scrolling="no"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
            <ContactList>
              <ContactItem>
                <FontAwesomeIcon icon={faFacebook} />{" "}
                <Anchor href="https://facebook.com/webforfun" target="_blank">
                  Facebook: Web For Fun
                </Anchor>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faFacebookMessenger} />{" "}
                <Anchor
                  href="https://www.facebook.com/messages/t/webforfun"
                  target="_blank"
                >
                  Messenger: Web For Fun
                </Anchor>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <span>Email: hello@webforfun.dev</span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span>Phone: 093-952-0586 (ชุน), 064-323-3512 (ไอซ์)</span>
              </ContactItem>
            </ContactList>
          </Grid>
        </WidthContainer>
      </Container>
    </Section>
  )
}
