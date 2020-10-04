import React, { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"

const containerAnimation = keyframes`
  0% {
    transform:  rotate(0deg);
  }

  25% {
    transform:  rotate(0deg);
  }

  50% {
    transform:  rotate(360deg);
  }

  100% {
    transform:  rotate(360deg);
  }
`

const Container = styled.svg`
  position: fixed;
  width: 50px;
  height: 50px;
  z-index: 100000;
  animation-name: ${containerAnimation};
  animation-iteration-count: infinite;
  animation-duration: 6s;
  pointer-events: none;

  @media (hover: none) {
    display: none;
  }
`

const animation = keyframes`
  0% {
    stroke: #EE1566;
  }

  25% {
    stroke: #1168F8;
  }

  50% {
    stroke: #F77D03;
  }

  100% {
    stroke: #EE1566;
  }
`

const ProgressBar = styled.rect`
  fill: transparent;
  stroke-width: 15;
  stroke-dasharray: 0 400;
  animation-name: ${animation};
  animation-iteration-count: infinite;
  animation-duration: 5s;
`

const ProgressTrack = styled.rect`
  fill: transparent;
  stroke: transparent;
  stroke-width: 15;
  stroke-dasharray: 400 400;
  stroke-linecap: round;
`

const Pointer = styled.circle`
  fill: #34495e;
`

const colors = ["#EE1566", "#1168F8", "#F77D03"]
export default function() {
  if (typeof window === "undefined") return null
  const ref = useRef()
  const progressRef = useRef()

  const onMouseMove = ({ clientX, clientY }) => {
    ref.current.style.top = clientY - 25 + "px"
    ref.current.style.left = clientX - 25 + "px"
  }

  const onScroll = () => {
    const progress =
      window.scrollY / (document.body.clientHeight - window.innerHeight)
    progressRef.current.style.strokeDasharray = `${400 * progress} 400`
  }

  const register = () => {
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("scroll", onScroll)
  }

  const unregister = () => {
    window.removeEventListener("mousemove", onMouseMove)
    window.removeEventListener("scroll", onScroll)
  }

  useEffect(() => {
    register()
    return unregister
  }, [])
  return (
    <Container ref={ref} viewBox="0 0 100 100">
      <ProgressTrack width="100" height="100" x="0" y="0"></ProgressTrack>
      <ProgressBar
        ref={progressRef}
        width="100"
        height="100"
        x="0"
        y="0"
      ></ProgressBar>
      <Pointer cx="50" cy="50" r="15"></Pointer>
    </Container>
  )
}
