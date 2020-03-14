import React, {useState} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import WebForFunLogo from "../images/logo.png"
import { Anchor, Container, LinkButton } from "./components"
import { media } from "./style"

const NavContainer = styled.div`
  padding: 10px 0;
  background: white;
  position: fixed;
  width: 100%;
  z-index: 99999;
  
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.3);
`

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AnchorContainer = styled.div`
  display: flex;
  align-items: center;
  
  & > ${Anchor} {
    margin: 0 15px;
  }
  
  ${media.tablet`
    display: none
  `}
`

const Logo = styled.img`
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
  background: rgba(0,0,0, 0.85);
  
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Dropdown style={{display: isOpen ? "flex" : "none"}}>
        <div>
          <Anchor href="#">รายละเอียดงาน</Anchor>
          <Anchor href="#">สถานที่จัดงาน</Anchor>
          <Anchor href="#">บรรยากาศปีที่ผ่านมา</Anchor>
          <Anchor href="#">FAQ</Anchor>
          <Anchor href="#">ผู้สนับสนุน</Anchor>
          <Anchor href="#">ติดต่อเรา</Anchor>
        </div>
      </Dropdown>
      <FlexContainer>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={!isOpen ? faBars : faTimes} />
        </Hamburger>
        <AnchorContainer>
          <div>
            <Logo src={WebForFunLogo} />
          </div>
          <Anchor href="#">รายละเอียดงาน</Anchor>
          <Anchor href="#">สถานที่จัดงาน</Anchor>
          <Anchor href="#">บรรยากาศปีที่ผ่านมา</Anchor>
          <Anchor href="#">FAQ</Anchor>
          <Anchor href="#">ผู้สนับสนุน</Anchor>
          <Anchor href="#">ติดต่อเรา</Anchor>
        </AnchorContainer>
        <div>
          <LinkButton style={{marginRight: 30}} href="#" target="_blank">
            สมัครกิจกรรม
          </LinkButton>
        </div>
      </FlexContainer>
    </NavContainer>
  )
}
