import React from "react"
import loadable from "@loadable/component"

import { GlobalStyle } from "../common/style"

import SEO from "../common/seo"
import Navbar from "../common/navbar"
import Footer from "../common/footer"

import LandingSection from "../sections/landing"
import AboutSection from "../sections/about"
import BenefitSection from "../sections/benefit"
import VenueSection from "../sections/venue"
import GallerySection from "../sections/gallery"
import FAQSection from "../sections/faq"
import SponsorSection from "../sections/sponsor"
import ContactSection from "../sections/contact"
import Cursor from "../common/cursor"

const ReviewSection = loadable(() =>
  import(/* webpackChunkName: `ReviewSection` */ "../sections/review")
)

const IndexPage = () => (
  <>
    <SEO />
    <GlobalStyle />

    <Navbar />
    <Cursor></Cursor>
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
