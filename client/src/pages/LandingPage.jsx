import React from "react";
import Hero from "../components/landing/Hero";
import Why from "../components/landing/Why";
import JoinNotification from "../components/ui/JoinNotification";
import Courses from "../components/landing/Courses";
import DialButton from "../components/ui/DialButton";

export default function LandingPage() {
  return (
    <div>
      <JoinNotification />
      <Hero />
      <Why />
      <Courses />
      <DialButton />
    </div>
  );
}
