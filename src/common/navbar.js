import React from "react"
import styled from "styled-components"
import { Anchor, Container, LinkButton } from "./components"

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
`

const Logo = styled.img`
  width: 40px;
  margin-right: 20px;
`

export default function() {
  return (
    <NavContainer>
      <FlexContainer>
        <AnchorContainer>
          <div>
            <Logo src="./images/logo.png" />
          </div>
          <Anchor href="#">รายละเอียดงาน</Anchor>
          <Anchor href="#">สถานที่จัดงาน</Anchor>
          <Anchor href="#">บรรยากาศปีที่ผ่านมา</Anchor>
          <Anchor href="#">FAQ</Anchor>
          <Anchor href="#">ผู้สนับสนุน</Anchor>
          <Anchor href="#">ติดต่อเรา</Anchor>
        </AnchorContainer>
        <div>
          <LinkButton href="#" target="_blank">
            สมัครค่าย
          </LinkButton>
        </div>
      </FlexContainer>
    </NavContainer>
  )
}
