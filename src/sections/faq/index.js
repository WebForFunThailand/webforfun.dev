import React, {useState} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Anchor, Center, Container, Heading } from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const Section = styled.div`
  padding: 50px 0;
`

const FAQContainer = styled.div`
  border-bottom: 1px solid #ececec; 
  padding: 5px 20px;
  
  & h2 {
    font-size: 1.4rem;
    font-weight: normal;
    font-family: ${fonts.header};
    cursor: pointer;
    
    display: block;
    position: relative;
  }
  & h2 div {
    position: absolute;
    right: 0;
    
    ${media.tablet`
      position: relative;
      display: inline-block;
      margin-right: 15px;
    `}
  }
  & p {
    color: #555;
    font-family: ${fonts.content};
  }
`

const FAQ = function(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FAQContainer>
      <h2 onClick={() => setIsOpen(!isOpen)}>
        <div><FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} /></div>
        {props.question}
      </h2>
      {isOpen &&
        <p>{props.answer}</p>
      }
    </FAQContainer>
  )
}


export default function() {
  return (
    <Section>
      <Container>
        <Center>
          <Heading color={colors.orange}>FAQ - คำถามที่พบบ่อย</Heading>
        </Center>
        <br/>

        <FAQ question="Web For Fun คืออะไร?" answer="งาน Web For Fun เป็นงาน Hackathon สำหรับผู้เริ่มต้นที่มีความสนใจในด้านการพัฒนาเว็บไซต์ ให้ได้พัฒนาฝีมือ, เรียนรู้จากผู้มีประสบการณ์ และพบปะเพื่อน ๆ ที่มีความชอบเหมือนกัน โดยในงานจะมีเหล่านักพัฒนาที่มีประสบการณ์แล้วคอยให้คำแนะนำ และช่วยเหลือในแต่ละทีม นอกจากนี้ภายในงานจะมี Workshop ต่างๆ เพื่อให้นักพัฒนาแต่ละคนสามารถคิดไอเดียออกมาได้สนุกที่สุด"/>
        <FAQ question="เป็นนักเรียน สามารถสมัครได้หรือไม่?" answer="งาน Web For Fun รับทั้งนักเรียนระดับมัธยมและนักศึกษาที่อยู่ในช่วงระหว่างอายุ 16-24 ปี"/>
        <FAQ question="งานจัดที่ไหน?" answer={
          <div><span style={{marginRight: 7}}>งานนี้จัดที่ Clazy Cafe' ใกล้กับ BTS สนามเป้า</span>
            <Anchor href="https://goo.gl/maps/CYgxXYCXVPfdyG3c8">https://goo.gl/maps/CYgxXYCXVPfdyG3c8</Anchor>
          </div>}/>
        <FAQ question="งานค้างคืน แล้วมีที่นอนให้หรือไม่?" answer="เราไม่ได้จัดหาที่นอนให้สำหรับผู้เข้าร่วมงาน ทางเราจะประกาศคำแนะนำในการหาสถานที่สำหรับค้างคืนให้ทราบอีกครั้ง ขออภัยในความไม่สะดวก"/>
      </Container>
    </Section>
  )
}