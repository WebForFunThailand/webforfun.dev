import React, {useState} from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { Anchor, Center, Container, Heading, P, Section } from "../../common/components"
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
        <P>{props.answer}</P>
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

        <FAQ
          question="Web For Fun คืออะไร?"
          answer="งาน Web For Fun เป็นงาน Hackathon สำหรับผู้เริ่มต้นที่มีความสนใจในด้านการพัฒนาเว็บไซต์ ให้ได้พัฒนาฝีมือ, เรียนรู้จากผู้มีประสบการณ์ และพบปะเพื่อน ๆ ที่มีความชอบเหมือนกัน โดยในงานจะมีเหล่านักพัฒนาที่มีประสบการณ์แล้วคอยให้คำแนะนำ และช่วยเหลือในแต่ละทีม นอกจากนี้ภายในงานจะมี Workshop ต่างๆ เพื่อให้นักพัฒนาแต่ละคนสามารถคิดไอเดียออกมาได้สนุกที่สุด"
        />
        <FAQ
          question="รูปแบบของกิจกรรม Hackathon เป็นแบบไหน?"
          answer="ผู้เข้าร่วมกิจกรรมทุกคนจะถูกจัดกลุ่มเป็นทีม ทีมละ 3 คน โดยในแต่ละทีมจะได้สร้างเว็บขึ้นมาหนึ่งเว็บ ซึ่งเป็นเว็บเกี่ยวกับอะไรก็ได้ (ไม่จำเป็นต้องมีโมเดลธุรกิจ หรือคิดว่าจะขายของยังไง) ยกตัวอย่างจากปีที่แล้วก็็จะมี เว็บเกม, เว็บกดโน้ตเพลง, หรือ สุ่มร้านอาหาร เป็นต้น และในวันสุดท้ายของกิจกรรมทุกกลุ่มก็จะได้มานำเสนอสิ่งที่เราทำ และแลกเปลี่ยนไอเดียกับเพื่อนๆทุกคน"
        />
        <FAQ
          question="เป็นนักเรียน สามารถสมัครได้หรือไม่?"
          answer="งาน Web For Fun รับทั้งนักเรียนระดับมัธยม นักศึกษา และบุคคลทั่วไปที่อายุอยู่ในช่วงระหว่าง 16-24 ปี"
        />
        <FAQ question="งานจัดที่ไหน วันที่เท่าไหร่?" answer={
          <div>
            สำหรับกิจกรรมเราตอนนี้ทีมงานคุยกันแล้วว่าขอเลื่อนไปโดยไม่มีกำหนดนะครับเนื่องมาจากไวรัส COVID-19 สามารถอ่านรายละเอียดได้ในเพจเลยครับ ส่วนสำหรับวันจัดกิจกรรมจะแจ้งให้ทราบอีกทีเมื่อได้วันที่แน่นอนแล้วครับ
          </div>}/>
        {/*<FAQ question="งานจัดที่ไหน วันที่เท่าไหร่?" answer={*/}
        {/*  <div>*/}
        {/*    <span style={{marginRight: 7}}>งานนี้จัดที่ Clazy Cafe' ใกล้กับ BTS สนามเป้า ในวันที่ 2 - 3 พฤษภาคม 2563</span>*/}
        {/*    <p>*/}
        {/*      แผนที่: <Anchor target="_blank" href="https://goo.gl/maps/CYgxXYCXVPfdyG3c8">https://goo.gl/maps/CYgxXYCXVPfdyG3c8</Anchor>*/}
        {/*    </p>*/}
        {/*  </div>}/>*/}
        {/*<FAQ*/}
        {/*  question="ปิดรับสมัคร และประกาศรายชื่อผู้เข้าร่วมกิจกรรมเมื่อไหร่?"*/}
        {/*  answer="กิจกรรมเราปิดรับสมัครในวันที่ 15 เมษายน 2563 และจะประกาศรายชื่อผู้เข้าร่วมงานในวันที่ 18 เมษายน 2563 ทาง FB Page, ทั้งนี้ถ้าหากว่าทางเรามีการเลื่อนวันจะมีการแจ้งให้ทราบอีกทีทาง FB Page (Web For Fun)"*/}
        {/*/>*/}
        <FAQ
          question="งานค้างคืน แล้วมีที่นอนให้หรือไม่?"
          answer="เราไม่ได้จัดหาที่นอนให้สำหรับผู้เข้าร่วมงาน ทางเราจะประกาศคำแนะนำในการหาสถานที่สำหรับค้างคืนให้ทราบอีกครั้ง ขออภัยในความไม่สะดวก"
        />
        {/*<FAQ*/}
        {/*  question="งานจะได้จัดรึป่าว เนื่องมาจากเหตุการณ์การระบาดของไวรัส COVID-19?"*/}
        {/*  answer="เนื่องมาจากปัจจุบันมีการระบาดของไวรัส COVID-19 ส่งผลให้กิจกรรมและงานต่างๆต้องเลื่อนออกไป สำหรับพวกเราแล้วเราให้ความสำคัญกับผู้เข้าร่วมกิจกรรมเป็นอันดับแรก ดังนั้นถ้าหากว่ามีแนวโน้มว่าเหตุการณ์จะรุนแรงขึ้น เราจะแจ้งให้ทุกท่านทราบทันทีถึงแนวทางการรับมือ (เช่นการ เลื่อนกิจกรรม หรือ แนวทางการรับมือในงาน) ทาง Facebook Page: Web For Fun ก่อนวันกิจกรรมอย่่างตำ่ 2 สัปดาห์"*/}
        {/*/>*/}

        <br />
        <br />
        <Center>
          <P>ถ้าหากมีข้อสงสัยเพิ่มเติมสามารถสอบถามเพิ่มเติมได้ที่ <Anchor href="https://facebook.com/webforfun" target="_blank">Facebook: Web For Fun</Anchor></P>
        </Center>
      </Container>
    </Section>
  )
}