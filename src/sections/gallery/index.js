import React from "react"
import styled from "styled-components"

import { Container, Heading, Center, Section } from "../../common/components"
import { media } from "../../common/style"
import { useGallerysImages } from "../../common/queries/gallerys"

import Modal from "./Modal"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.phone`
    grid-template-columns: 1fr;
  `}
`

export default function() {
  const images = useGallerysImages()

  return (
    <Section>
      <Container>
        <Center>
          <Heading>บรรยากาศปีที่ผ่านมา</Heading>
        </Center>
        <br />

        <Grid>
          {images.map(image => (
            <Modal src={image.source} key={image.id} />
          ))}
        </Grid>
        <br />
      </Container>
    </Section>
  )
}
