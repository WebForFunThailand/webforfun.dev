import React, { useRef, useEffect } from "react"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
  0% {
    background: #EE1566;
  }

  25% {
    background: #1168F8;
  }

  50% {
    background: #F77D03;
  }

  100% {
    background: #EE1566;
  }
`

const ProgressBar = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 5px;
  width: 0px;
  z-index: 100000;
  animation-name: ${animation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`

export default () => {
  const ref = useRef()

  const onScroll = () => {
    const progress =
      window.scrollY / (document.body.clientHeight - window.innerHeight)
    ref.current.style.width = `${document.body.clientWidth * progress}px`
  }

  const register = () => {
    window.addEventListener("scroll", onScroll)
  }

  const unregister = () => {
    window.removeEventListener("scroll", onScroll)
  }

  useEffect(() => {
    register()
    return unregister
  }, [])

  return <ProgressBar ref={ref}></ProgressBar>
}
