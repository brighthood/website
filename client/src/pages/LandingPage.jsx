import React from "react";
import Hero from "../components/landing/Hero";
import Why from "../components/landing/Why";
import JoinNotification from "../components/ui/JoinNotification";
import Courses from "../components/landing/Courses";
import Testimonials from "../components/landing/Testimonials";
import Benefits from "../components/landing/Benefits";
import Footer from "../components/landing/Footer";
import WhatYouWillBuild from "../components/landing/WhatYouWillBuild";
import DialButton from "../components/ui/DialButton";
import Faq from "../components/landing/Faq";

export default function LandingPage() {
  return (
    <>
      <JoinNotification />
      <Hero />
      <Why />
      <Courses />
      <WhatYouWillBuild />
      <Testimonials />
      <Benefits />
      <Faq />
      <Footer />
      <DialButton />
    </>
  );
}
