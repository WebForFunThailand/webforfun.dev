import React, {useState} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Center, Container, Heading } from "../../common/components"
import { colors, fonts } from "../../common/style"

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
  }
  & p {
    color: #555;
    font-family: ${fonts.content};
  }
`

const FAQ = function() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FAQContainer>
      <h2 onClick={() => setIsOpen(!isOpen)}>
        <div><FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} /></div>
        ค่ายนี้เขียนเว็บอย่างเดียวหรือเปล่า ? ต้องเรียนคอมมาเท่านั้นหรือไม่ ?
      </h2>
      {isOpen &&
        <p>ค่ายนี้มีมากกว่าเขียนเว็บ เนื่องจากเว็บไซต์หนึ่งเว็บต้องใช้คนที่มีทักษะหลากหลายในการสร้าง ทั้งในส่วนของผู้ที่ทำหน้าที่สร้างเว็บไซต์หรือโปรแกรมมิ่ง (Web Programming) ผู้ที่ออกแบบประสบการณ์ภายในเว็บไซต์หรือตกแต่งเว็บไซต์ให้สวยงามอย่างเว็บดีไซน์ (Web Design) ผู้ที่ถ่ายทอดเรื่องราวในเว็บไซต์ (Web Content) และผู้ที่วางกลยุทธ์ทางการตลาดเพื่อสร้างรายได้ให้กับเว็บไซต์อย่างมาร์เก็ตติ้ง (Web Marketing) เพราะฉะนั้น สามารถเลือกเข้าร่วมค่ายในสาขาใดสาขาหนึ่งได้</p>
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

        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
      </Container>
    </Section>
  )
}