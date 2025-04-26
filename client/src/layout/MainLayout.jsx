import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="pt-16 bg-background dark:bg-dark-background min-h-screen">
        <Outlet />
      </main>
    </>
  );
}
