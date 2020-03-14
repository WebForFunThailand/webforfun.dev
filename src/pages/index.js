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
import FAQSection from "../sections/faq"
import SponsorSection from "../sections/sponsor"
import ContactSection from "../sections/contact"

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
    <FAQSection />
    <SponsorSection />
    <ContactSection />
  </>
)

export default IndexPage
