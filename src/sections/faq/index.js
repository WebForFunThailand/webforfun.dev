import React, { useState } from "react"
import styled from "styled-components"
import DropDownIcon from "./DropDownIcon"

import {
  Anchor,
  Center,
  Container,
  Heading,
  P,
  Section,
} from "../../common/components"
import { colors, fonts, media } from "../../common/style"

const FAQContainer = styled.div`
  border-bottom: 1px solid #ececec;
  padding: 5px 20px;

  & h2 {
    font-size: 1.2rem;
    font-weight: normal;
    font-family: ${fonts.header};
    cursor: pointer;

    display: block;
    position: relative;
  }
  & h2 div {
    position: absolute;
    right: 0;
    height: 100%;

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

const ParagraphContainer = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0px")};
  transition: 0.6s;
`

const Paragraph = styled.p`
  font-family: ${fonts.content};
  color: #555;
`

const FAQ = function(props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <FAQContainer>
      <h2 onClick={() => setIsOpen(!isOpen)}>
        <div>
          <DropDownIcon enable={isOpen}></DropDownIcon>
        </div>
        {props.question}
      </h2>
      <ParagraphContainer isOpen={isOpen}>
        <Paragraph isOpen={isOpen}>{props.answer}</Paragraph>
      </ParagraphContainer>
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
        <br />

        <FAQ
          question="ใครสามารถสมัครกิจกรรมได้บ้าง?"
          answer="นักเรียน นักศึกษา รวมถึงบุคคลทั่วไปที่มีอายุไม่เกิน 24 ปี ทั้งนี้ผู้ร่วมงานจะต้องสมัครเข้ามาเป็นทีม (ทีมละ 3 คน) โดยทางเราจะประกาศผลการสมัครให้ทราบอีกทีทาง Facebook Page: Web For Fun"
        />
        <FAQ
          question="พึ่งเริ่มต้นเขียนเว็บสามารถสมัครได้หรือไม่?"
          answer="สามารถสมัครได้ เนื่องจากว่ากิจกรรมนี้ทางทีมผู้จัดมุ่งเน้นไปที่ไอเดีย กับการเรียนรู้ของผู้เข้าร่วมงานเป็นหลัก ดังนั้นภายในงานจะมีทีมงานที่มีประสบการณ์คอยให้คำช่วยเหลือตลอดทั้งงาน"
        />
        <FAQ
          question="รูปแบบของกิจกรรม Hackathon เป็นแบบไหน?"
          answer="เป็น Hackathon แบบชิวๆที่ในแต่ละทีมจะได้สร้างเว็บขึ้นมาหนึ่งเว็บ ซึ่งเป็นเว็บเกี่ยวกับอะไรก็ได้ (ไม่จำเป็นต้องมี Business Model หรือคิดว่าจะขายยังไง ขอแค่คนทำสนุกก็พอ) และในวันสุดท้ายของกิจกรรมทุกทีมก็จะได้มานำเสนอสิ่งที่ทำและแลกเปลี่ยนไอเดียของเรากับเพื่อน ๆที่เข้าร่วมกิจกรรมทุกคน"
        />
        <FAQ
          question="งานจัดสองวันจำเป็นต้องค้างคืนหรือป่าว?"
          answer="สถานที่จัดงานเปิดตลอด 24 ชั่วโมง แต่ผู้เข้าร่วมงานไม่จำเป็นต้องค้างคืน ทั้งนี้ผู้เข้าร่วมงานสามารถกลับบ้าน หรือหาเช่าที่พักแถวสถานที่จัดงานได้ตามสะดวก"
        />
        <FAQ
          question="ทำไมเราถึงจัดงานนี้ขึ้นมา?"
          answer="ทางผู้จัดงานตั้งใจจะสร้างพื้นที่สำหรับกลุ่มคนที่สนใจในด้านการพัฒนาเว็บไซต์ได้มารวมตัวกัน แลกเปลี่ยนไอเดียกัน และได้มาใช้เวลาเรียนรู้และพัฒนา Skill ใหม่ๆ รวมถึงยังต้องการสร้างพื้นที่ที่เปิดกว้างสำหรับนักพัฒนามือใหม่อีกด้วย"
        />

        <br />
        <br />
        <Center>
          <P>
            ถ้าหากมีข้อสงสัยเพิ่มเติมสามารถสอบถามเพิ่มเติมได้ที่{" "}
            <Anchor href="https://facebook.com/webforfun" target="_blank">
              Facebook: Web For Fun
            </Anchor>
          </P>
        </Center>
      </Container>
    </Section>
  )
}
