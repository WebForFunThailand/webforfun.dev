import React from "react"
import styled from "styled-components"

const Container = styled.svg`
  height: 20px;
  transition: 1s;
  transform: rotate(${({ enable }) => (enable ? 0 : 360)}deg);
`

const LeftCross = styled.path`
  stroke-width: 15;
  stroke: #2c3e50;
  stroke-linecap: round;
  d: path("${({ enable }) =>
    enable ? "M 50 25 L 90 80" : "M 10 25 L 50 80"}");
  transition: 0.6s;
`

const RightCross = styled.path`
  stroke-width: 15;
  stroke: #2c3e50;
  stroke-linecap: round;
  d: path("${({ enable }) =>
    enable ? "M 50 25 L 10 80" : "M 90 25 L 50 80"}");
  transition: 0.6s;
`

export default function({ enable }) {
  return (
    <Container viewBox="0 0 100 100" enable={enable}>
      <LeftCross enable={enable}></LeftCross>
      <RightCross enable={enable}></RightCross>
    </Container>
  )
}
