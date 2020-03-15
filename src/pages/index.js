import React from "react"

import { GlobalStyle } from "../common/style"

import SEO from "../common/seo"
import Navbar from "../common/navbar"
import Footer from "../common/footer"

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
    <div id="about" name="about">
      <AboutSection />
      <BenefitSection />
    </div>
    <div id="venue" name="venue">
      <VenueSection />
    </div>
    <div id="gallery" name="gallery">
      <GallerySection />
      <ReviewSection />
    </div>
    <div id="faq" name="faq">
      <FAQSection />
    </div>
    <div id="sponsor" name="sponsor">
      <SponsorSection />
    </div>
    <div id="contact" name="contact">
      <ContactSection />
    </div>

    <Footer />
  </>
)

export default IndexPage
