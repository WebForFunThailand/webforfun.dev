import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Center, Heading, LinkButton, P } from "../../common/components"
import { fonts, media } from "../../common/style"
import { useLogosImages } from "../../common/queries/logos"

const Section = styled.div`
  min-height: 100vh;

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

export default function() {
  const { logo } = useLogosImages()

  return (
    <Section>
      <div>
        <Center>
          <Logo>
            <Img fluid={logo.source} />
          </Logo>
        </Center>

        <Center>
          <Heading>2 - 3 พฤษภาคม 2563</Heading>
        </Center>
        <Center>
          <Content>@Clazy Cafe’ BTS Sanam Pao</Content>
        </Center>

        <br />
        <br />
        <Center>
          <LinkButton
            big
            href="https://forms.gle/bMLeKDbDTNdGr6ry9"
            target="_blank"
          >
            สมัครเข้าร่วมกิจกรรม
          </LinkButton>
        </Center>
        <br/>
        <Center>
          <P>ปิดรับสมัครผู้เข้าร่วมกิจกรรมวันที่ 15 เมษายน 2563</P>
        </Center>
      </div>
    </Section>
  )
}
