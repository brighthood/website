import { Benefit } from "@/components/landing/Benefit";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Testimonial } from "@/components/landing/Testimonials";
import { WhatYouBuild } from "@/components/landing/WhatYouBuild";
import { Why } from "@/components/landing/Why";
import React from "react";


export default function LandingPage() {
  return (
    <>
      <Hero />
      <Why />
      <Benefit />
      <WhatYouBuild />
      <Testimonial />
      <Faq heading={""} description={""} supportHeading={""} supportDescription={""} supportButtonText={""} supportButtonUrl={""} />
      <Footer />
    </>
  );
}
