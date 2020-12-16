import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import {
  Center,
  DisabledButton,
  Heading,
  LinkButton,
} from "../../common/components"
import { fonts, media } from "../../common/style"
import { useLogosImages } from "../../common/queries/logos"

const BackgroundAnimation =
  typeof window !== `undefined`
    ? require("./BackgroundAnimation").default
    : () => <div />

const Section = styled.div`
  min-height: 100vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.div`
  width: 200px;
  height: 259px;
  margin-top: 50px;
  margin-bottom: 10px;
`

const Content = styled.div`
  color: #555;
  font-size: 1.4rem;
  font-family: ${fonts.header};
  margin-top: -20px;

  ${media.phone`
    font-size: 1.2rem;
  `}
`

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    white,
    rgba(255, 255, 255, 0)
  );
`

export default function() {
  const { logo } = useLogosImages()

  return (
    <Section>
      <BackgroundAnimation />
      <Container>
        <div>
          <Center>
            <Logo>
              <Img fluid={logo.source} />
            </Logo>
          </Center>
          <Center>
            <Heading>16 - 17 มกราคม 2021</Heading>
          </Center>
          <Center>
            <Content>@Clazy Cafe’ BTS Sanam Pao</Content>
          </Center>

          <br />
          <br />
          <Center>
            {/* <DisabledButton big>เปิดรับสมัครเร็วๆนี้</DisabledButton> */}
            <LinkButton
              big
              href="https://bit.ly/webforfun-register"
              target="_blank"
            >
              สมัครเข้าร่วมกิจกรรม
            </LinkButton>
          </Center>
          <br />
          <Center>
            <p style={{ color: "#555555" }}>
              ปิดรับสมัครผู้เข้าร่วมกิจกรรมวันที่ 9 มกราคม 2564
            </p>
          </Center>
        </div>
      </Container>
    </Section>
  )
}
