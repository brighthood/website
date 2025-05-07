import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import Loading from "./components/ui/Loading";
import DashbordLayout from "./layout/DashbordLayout"
import AuthLayout from "./layout/AuthLayout"

const LandingPage = lazy(() => import("./pages/LandingPage"));
const MainLayout = lazy(() => import("./layout/MainLayout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* landing page route */}
        <Route path="/" element={<MainLayout />} >
          <Route index element={<LandingPage />} />
        </Route>
        {/* autentication route */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />
        </Route>
        {/*  dashboard route */}
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <DashbordLayout />
              </SignedIn>
              <SignedOut>
                <Route index element={<LandingPage />} />
              </SignedOut>
            </>
          }
        >

        </Route>


      </Routes>
    </ Suspense >
  );
}

export default App;
