import React from "react";
import Hero from "../components/landing/Hero";
import Why from "../components/landing/Why";
import JoinNotification from "../components/ui/JoinNotification";

export default function LandingPage() {
  return (
    <div>
      <div>
        <JoinNotification />
      </div>
      <Hero />
      <Why />
    </div>
  );
}
