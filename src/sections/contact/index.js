import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons"

import { Center, Container, Heading, Section } from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: max-content max-content max-content;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:nth-child(2){
      display: none;
    }
    
    & > div:nth-child(1) {
      margin-bottom: 30px; 
    }
  `}
`

const VerticleLine = styled.div`
  height: 100%;
  width: 4px;
  border-radius: 2px;
  background-color: #555;
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
  width: max-content;
  max-width: 100%;
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
  border-radius: 5px;
`

export const Anchor = styled.a`
  font-family: ${fonts.header};
  color: #555;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: black;
  }
`

export default function() {
  if (typeof window === "undefined") return null
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
            <VerticleLine></VerticleLine>
            <ContactList>
              <ContactItem>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#2d3436" }}
                />{" "}
                <Anchor href="https://facebook.com/webforfun" target="_blank">
                  Web For Fun
                </Anchor>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon
                  icon={faFacebookMessenger}
                  style={{ color: "#2d3436" }}
                />{" "}
                <Anchor
                  href="https://www.facebook.com/messages/t/webforfun"
                  target="_blank"
                >
                  Web For Fun
                </Anchor>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#2d3436" }}
                />{" "}
                <Anchor href="mailto:hello@webforfun.dev" target="_blank">
                  hello@webforfun.dev
                </Anchor>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#2d3436" }} />{" "}
                <Anchor href="tel:093-952-0586" target="_blank">
                  093-952-0586 (ชุน), 064-323-3512 (ไอซ์)
                </Anchor>
              </ContactItem>
            </ContactList>
          </Grid>
        </WidthContainer>
      </Container>
    </Section>
  )
}
