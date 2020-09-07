import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Center, DisabledButton, Heading } from "../../common/components"
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

  background: linear-gradient(to right, transparent, white, transparent);
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
            <Heading>14 - 15 พฤศจิกายน 2020</Heading>
          </Center>
          <Center>
            <Content>@Clazy Cafe’ BTS Sanam Pao</Content>
          </Center>

          <br />
          <br />
          <Center>
            <DisabledButton big>เปิดรับสมัครเร็วๆนี้</DisabledButton>
            {/*<LinkButton*/}
            {/*  big*/}
            {/*  href="https://forms.gle/bMLeKDbDTNdGr6ry9"*/}
            {/*  target="_blank"*/}
            {/*>*/}
            {/*  สมัครเข้าร่วมกิจกรรม*/}
            {/*</LinkButton>*/}
          </Center>
          {/*<br/>*/}
          {/*<Center>*/}
          {/*  <P>ปิดรับสมัครผู้เข้าร่วมกิจกรรมวันที่ 15 เมษายน 2563</P>*/}
          {/*</Center>*/}
        </div>
      </Container>
    </Section>
  )
}
