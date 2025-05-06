import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/landing/NavBar"

export default function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
