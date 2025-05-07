// main.tsx or index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import './index.css';

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY!;
if (!clerkFrontendApi) {
  throw new Error("VITE_CLERK_PUBLISHABLE_KEY is not defined");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

