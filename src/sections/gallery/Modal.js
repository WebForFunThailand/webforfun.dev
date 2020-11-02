import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Container, Heading } from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const ModalBox = styled.div`
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 99999999; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "unset" : "none")};
  transition: 0.3s;
  // background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
`

const ModalContent = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
`

const Image = styled.div`
  border-radius: 5px;
  transition: 0.3s;
  width: 100%;
  overflow: hidden;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

const Close = styled.span`
  position: absolute;
  top: 35px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  :hover,
  :focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`

export default function(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Image onClick={() => setIsOpen(!isOpen)}>
        <Img fluid={props.src} />
      </Image>
      {/* {isOpen && ( */}
      <ModalBox visible={isOpen}>
        <Close onClick={() => setIsOpen(!isOpen)}>&times;</Close>
        <ModalContent>
          <Img fluid={props.src} />
        </ModalContent>
      </ModalBox>
      {/* )} */}
    </div>
  )
}
