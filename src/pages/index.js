import React from "react"

import {GlobalStyle} from "../common/style"

import SEO from "../common/seo"
import Navbar from "../common/navbar"

import LandingSection from "../sections/landing"
import AboutSection from "../sections/about"
import BenefitSection from "../sections/benefit"
import VenueSection from "../sections/venue"
import GallerySection from "../sections/gallery"
import ReviewSection from "../sections/review"

const IndexPage = () => (
  <>
    <SEO title="Web For Fun Hackathon 2020" />
    <GlobalStyle />

    <Navbar />

    <LandingSection />
    <AboutSection />
    <BenefitSection />
    <VenueSection />
    <GallerySection />
    <ReviewSection />
  </>
)

export default IndexPage
