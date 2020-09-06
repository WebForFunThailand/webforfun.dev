import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

import reviews from "./reviews"
import { Center, Container, Heading, Section } from "../../common/components"
import { colors, fonts, media } from "../../common/style"
import { useReviewersImages } from "../../common/queries/reviewers"

const Card = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 4fr;
  opacity: ${({ enable }) => (enable ? 1 : 0)};
  transition: 0.6s;

  & img {
    border-radius: 50%;
    ${media.tablet`
      width: 200px;
      display: block;
      margin: auto auto;
    `}
  }

  ${media.tablet`
    grid-gap: 25px;
  `}

  & p {
    color: #555;
    font-size: 1.2rem;
    font-family: ${fonts.content};
  }

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`

const Profile = styled.div`
  font-family: ${fonts.header};
`

const FlexRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  ${media.tablet`
    justify-content: center;
  `}
`

const Slider = styled.div`
  padding: 10px;
  display: flex;

  & div {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    ${media.tablet`
      width: 50px;
      height: 50px;
      font-size: 1.2rem;
    `}
  }
  & > div:nth-child(1) {
    margin-right: 10px;
  }
  & > div:nth-child(2) {
    background: #f7f7f7;
    color: ${colors.red};
  }

  ${media.tablet`
    margin-top: 20px;
  `}
`

const Arrow = styled.div`
  user-select: none;
`

const Image = styled(Img)`
  max-width: 200px;
  margin: auto auto;
`

const SlideContainer = styled.div`
  width: 100%;
  position: relative;
  transition: 0.6s;
`

const slideAnimation = (counter, direction) =>
  direction > 0
    ? keyframes`
from {
  margin-left: ${counter * -100 + "%"};
}
to {
  margin-left: ${(counter + 1) * -100 + "%"};
}
`
    : keyframes`
    from {
      margin-left: ${(counter + 2) * -100 + "%"};
    }
    to {
      margin-left: ${(counter + 1) * -100 + "%"};
    }
    `

const MovableSlideContent = styled.div`
  width: ${({ itemNumber }) => `${itemNumber}00%`};
  display: grid;
  grid-template-columns: repeat(${({ itemNumber }) => itemNumber}, 1fr);
  animation-name: ${({ counter, direction }) =>
    slideAnimation(counter, direction)};
  animation-iteration-count: 1;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
`

function useSlide(maxValue, defaultValue) {
  const [counter, setCounter] = useState(defaultValue)

  function increment() {
    setCounter((counter + 1) % maxValue)
  }

  function decrement() {
    setCounter((counter + (maxValue - 1)) % maxValue)
  }

  return [counter, increment, decrement]
}

export default function() {
  const [counter, increment, decrement] = useSlide(reviews.length, 0)
  const [direction, setDirection] = useState(1)
  const profileImages = useReviewersImages()

  // const { reviewer, profileImageName, detail } = reviews[counter]

  // const reviewerImage = profileImages[profileImageName].source

  return (
    <Section>
      <Container>
        <Center>
          <Heading color={colors.blue}>
            ความรู้สึกของผู้เคยเข้าร่วมกิจกรรม
          </Heading>
        </Center>
        <br />
      </Container>

      <div style={{overflow: 'hidden'}}>
        <Container>
          <SlideContainer>
            <MovableSlideContent
              itemNumber={reviews.length + 2}
              counter={counter}
              direction={direction}
            >
              {[reviews[reviews.length - 1], ...reviews, reviews[0]].map(
                ({ reviewer, profileImageName, detail }, index) => {
                  const reviewerImage = profileImages[profileImageName].source
                  return (
                    <Card
                      enable={
                        index === counter + 1 ||
                        (index === reviews.length + 1 && counter + 1 === 1) ||
                        (index === 0 && counter + 1 === reviews.length)
                      }
                      key={index}
                    >
                      <div>
                        <Image fluid={reviewerImage} />
                      </div>
                      <div>
                        <p>“{detail}”</p>
                        <Profile>รีวิวโดย {reviewer}</Profile>
                      </div>
                    </Card>
                  )
                }
              )}
            </MovableSlideContent>
          </SlideContainer>
        </Container>
      </div>

      <Container>
        <FlexRight>
          <Slider>
            <Arrow
              onClick={() => {
                decrement()
                setDirection(-1)
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Arrow>
            <Arrow
              onClick={() => {
                increment()
                setDirection(1)
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </Arrow>
          </Slider>
        </FlexRight>
      </Container>
    </Section>
  )
}
