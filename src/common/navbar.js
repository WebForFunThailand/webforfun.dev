import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

import { Anchor, Center, Container, DisabledButton, LinkButton } from "./components"
import { media } from "./style"
import { useLogosImages } from "./queries/logos"

const NavContainer = styled.div`
  padding: 10px 0;
  background: white;
  position: fixed;
  width: 100%;
  z-index: 99999;

  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.3);
`

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AnchorContainer = styled.div`
  display: flex;
  align-items: center;

  & ${Anchor} {
    margin: 0 15px;
  }

  ${media.tablet`
    display: none
  `}
`

const Logo = styled.div`
  width: 40px;
  margin-right: 20px;
`

const Hamburger = styled.div`
  display: none;
  font-size: 1.6rem;
  cursor: pointer;

  ${media.tablet`
    display: block; 
  `}
`

const Dropdown = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 58px;

  text-align: center;
  background: rgba(0, 0, 0, 0.85);

  display: flex;
  align-items: center;
  justify-content: center;

  & ${Anchor} {
    color: white;
    display: block;
    font-size: 1.4rem;
    margin: 30px 0;
  }
`

export default function() {
  const [isOpen, setIsOpen] = useState(false)

  const { logo } = useLogosImages()

  return (
    <NavContainer>
      <Dropdown style={{ display: isOpen ? "flex" : "none" }}>
        <div>
          <Link
            onClick={() => setIsOpen(false)}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">รายละเอียดงาน</Anchor>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="venue"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">สถานที่จัดงาน</Anchor>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">บรรยากาศปีที่ผ่านมา</Anchor>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="faq"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">FAQ</Anchor>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="sponsor"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">ผู้สนับสนุน</Anchor>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">ติดต่อเรา</Anchor>
          </Link>
        </div>
      </Dropdown>
      <FlexContainer>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={!isOpen ? faBars : faTimes} />
        </Hamburger>
        <AnchorContainer>
          <div>
            <Logo>
              <Img fluid={logo.source} />
            </Logo>
          </div>
          <Link to="about" spy={true} smooth={true} duration={500} offset={-80}>
            <Anchor href="#">รายละเอียดงาน</Anchor>
          </Link>
          <Link to="venue" spy={true} smooth={true} duration={500} offset={-80}>
            <Anchor href="#">สถานที่จัดงาน</Anchor>
          </Link>
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">บรรยากาศปีที่ผ่านมา</Anchor>
          </Link>
          <Link to="faq" spy={true} smooth={true} duration={500} offset={-80}>
            <Anchor href="#">FAQ</Anchor>
          </Link>
          <Link
            to="sponsor"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">ผู้สนับสนุน</Anchor>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            <Anchor href="#">ติดต่อเรา</Anchor>
          </Link>
        </AnchorContainer>
        <div>
          <DisabledButton big>
            เปิดรับสมัครเร็วๆนี้
          </DisabledButton>
          {/*<LinkButton*/}
          {/*  href="https://forms.gle/bMLeKDbDTNdGr6ry9"*/}
          {/*  target="_blank"*/}
          {/*>*/}
          {/*  สมัครกิจกรรม*/}
          {/*</LinkButton>*/}
        </div>
      </FlexContainer>
    </NavContainer>
  )
}
