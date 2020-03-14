import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Container, Heading } from "../../common/components"
import { colors, fonts } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
`

const Card = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 4fr;
  
  & img {
    border-radius: 50%;
  }
  
  & p {
    color: #555;
    font-size: 1.2rem;
    font-family: ${fonts.content};
  }
`

const Profile = styled.div`
  font-family: ${fonts.header};
`

const FlexRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
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
  }
  & > div:nth-child(1) {
    margin-right: 10px;
  }
  & > div:nth-child(2) {
    background: #f7f7f7;
    color: ${colors.red};
  }
`

export default function() {
  return (
    <Section>
      <Container>
        <Heading color={colors.blue}>ความรู้สึกของผู้เคยเข้าร่วมกิจกรรม</Heading>
        <br/>

        <Card>
          <div>
            <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/69455470_1281964135311273_1355291769364807680_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=lxsvvB3i7K8AX91G1kw&_nc_ht=scontent-sin6-1.xx&oh=b831c4d645bfcf38aa736975067fe6dd&oe=5E93DBEA" width="100%"/>
          </div>
          <div>
            <p>“ที่ได้ไปงานมาปีที่แล้ว บรรยากาศงานเป็นกันเองมากๆครับ จะไปกลุ่มหรือไปเดี่ยวก็ไม่ต้องกลัวเหงาเพราะจะได้เจอเพื่อนๆใหม่ๆ แลกเปลี่ยนประสบการณ์กัน แชร์ไอเดียกัน หรือถ้าไม่มีไอเดียก็ไปคิดที่งานทางทีมงานก็มีคำแนะนำให้ด้วยว่าหาไอเดียยังไงดดีเริ่มจากตรงไหน แถมยังมีการเปิด session สอนในเรื่องที่มีคนอยากรู้หรืออยากสอนด้วยทำให้เราได้เรียนรู้อะไรอีกเยอะเลย สุดท้าย สถานที่จัดงานดี อาหารอร่อย ทีมงานดี เพื่อนร่วมงานดี แนะนำมากๆครับ 😀”</p>
            <Profile>รีวิวโดย Chun Rapeepat</Profile>
          </div>
        </Card>

        <FlexRight>
          <Slider>
            <div>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Slider>
        </FlexRight>
      </Container>
    </Section>
  )
}