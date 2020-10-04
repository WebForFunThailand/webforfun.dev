import React, { useEffect, useRef, useState } from "react"
import Sketch from "react-p5"

export default () => {
  const [screenWidth, setScreenWidth] = useState(null)
  const [screenHeight, setScreenHeight] = useState(null)
  const [loading, setLoading] = useState(false)
  const parentRef = useRef()

  let blocks = []
  let time = 1
  let timeoutId = null
  let P5 = null

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { height, width } = parentRef.current.getBoundingClientRect()
      const updateScreenResolution = () => {
        setScreenHeight(height)
        setScreenWidth(width)
        if (timeoutId) clearTimeout(timeoutId)
        setLoading(true)

        timeoutId = setTimeout(() => {
          setLoading(false)
        }, 500)
      }

      updateScreenResolution()

      window.addEventListener("resize", () => {
        updateScreenResolution()
      })

      return window.removeEventListener("resize", () => {})
    }
  }, [])

  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function renderRect(x, y, size, color, frame, v) {
    const _y = y - frame * v
    const fade = Math.min(1, frame / 500)
    const distance = size / 70
    color.setAlpha(256 * distance * fade)

    createRect(x, _y, size, color)

    if (_y <= -size) {
      return true
    }
  }

  function createRect(x, y, size, color) {
    if (P5) {
      P5.rect(x, y, size, size, 5)
      P5.noStroke()
      P5.fill(color)
    }
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(screenWidth, screenHeight).parent(canvasParentRef)
    P5 = p5
  }

  const draw = p5 => {
    p5.background(255)

    let colors = [
      [238, 20, 101],
      [16, 103, 247],
      [246, 125, 5],
    ]

    if (!(time % 20)) {
      let x = getRandomInt(0, screenWidth)
      let y = screenHeight - 70
      let size = getRandomInt(20, 70)
      let c = p5.color(...colors[getRandomInt(0, 2)])

      blocks.push({ x, y, size, color: c, frame: 0 })
    }

    blocks.forEach((block, i) => {
      renderRect(
        block.x,
        block.y,
        block.size,
        block.color,
        block.frame,
        block.size / 32
      )
      ++block.frame
    })

    ++time
  }

  return (
    <div
      ref={parentRef}
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      {loading ? null : <Sketch setup={setup} draw={draw} />}
    </div>
  )
}
