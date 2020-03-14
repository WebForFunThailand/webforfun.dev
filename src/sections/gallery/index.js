import React from "react"
import styled from "styled-components"

import { Container, Heading, Center} from "../../common/components"
import { colors, fonts, media } from "../../common/style"

import Modal from './Modal'

const Section = styled.div`
  padding: 50px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  ${media.desktop`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export default function() {
  return (
    <Section>
      <Container>
        <Center>
          <Heading>บรรยากาศปีที่ผ่านมา</Heading>
        </Center>
        <br/>

        <Grid>
          <Modal src="https://r-cf.bstatic.com/images/hotel/max1024x768/116/116281465.jpg"/>      
          <Modal src="https://cdn.pixabay.com/photo/2018/12/21/14/26/view-3887981_960_720.jpg"/>      
          <Modal src="https://image.shutterstock.com/image-photo/view-sea-houses-on-hillsides-600w-785350507.jpg"/>      
          <Modal src="https://pix10.agoda.net/hotelImages/443/443651/443651_16090818170046261601.jpg?s=1024x768"/>      
          <Modal src="https://www.tripgether.com/photos/shares/Pasu/5%20Mae%20salong/1015.jpg"/>      
          <Modal src="https://articlekey.com/wp-content/uploads/2018/01/1.jpg"/>      
          <Modal src="https://www.wangnokkaew.com/img/slide_new%20(2).jpg"/>      
          <Modal src="https://www.chillpainai.com/src/wewakeup/chillwriter/uploads/2016-09-20%2015:08:46_Goodview12.jpg"/>      
        </Grid>
        <br/>
      </Container>
    </Section>
  )
}
