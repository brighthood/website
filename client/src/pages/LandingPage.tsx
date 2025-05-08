import { Benefit } from "@/components/landing/Benefit";
import { Courses } from "@/components/landing/Courses";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/NavBar";
import { Testimonial } from "@/components/landing/Testimonials";
import { WhatYouBuild } from "@/components/landing/WhatYouBuild";
import { Why } from "@/components/landing/Why";
import React from "react";


export default function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Hero />
      <Why />
      <Courses />
      <WhatYouBuild />
      <Benefit />
      <Testimonial />
      <Faq heading={""} description={""} supportHeading={""} supportDescription={""} supportButtonText={""} supportButtonUrl={""} />
      <Footer />
    </div>
  );
}
