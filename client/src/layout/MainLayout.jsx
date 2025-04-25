import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className=" mx-auto py-28 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Outlet />
      </main>
    </>
  );
}
