import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import reviews from "./reviews"
import { Center, Container, Heading } from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
`

const Card = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 4fr;
  
  & img {
    border-radius: 50%;
    ${media.tablet`
      width: 200px;
      display: block;
      margin: auto auto;
    `}
  }
  
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

function useSlide(maxValue, defaultValue) {
  const [counter, setCounter] = useState(defaultValue);

  function increment() {
    setCounter((counter + 1) % maxValue);
  }

  function decrement() {
    setCounter((counter + (maxValue - 1)) % maxValue);
  }

  return [counter, increment, decrement];
}

export default function() {
  const [counter, increment, decrement] = useSlide(reviews.length, 0);

  return (
    <Section>
      <Container>
        <Center>
          <Heading color={colors.blue}>ความรู้สึกของผู้เคยเข้าร่วมกิจกรรม</Heading>
        </Center>
        <br/>

        <Card>
          <div>
            <img src={reviews[counter].profile} width="100%"/>
          </div>
          <div>
            <p>“{reviews[counter].detail}”</p>
            <Profile>รีวิวโดย {reviews[counter].reviewer}</Profile>
          </div>
        </Card>

        <FlexRight>
          <Slider>
            <div onClick={decrement}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div onClick={increment}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Slider>
        </FlexRight>
      </Container>
    </Section>
  )
}