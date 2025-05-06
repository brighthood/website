import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-dvh bg-dark-background dark:bg-dark-background ">
      <Outlet />
    </div>
  );
}
