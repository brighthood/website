import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/ui/Loading";
const NavBar = lazy(() => import("./components/NavBar"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const MainLayout = lazy(() => import("./layout/MainLayout"));
const AuthLayout = lazy(() => import("./layout/AuthLayout"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<LandingPage />} />
            </Route>

            <Route element={<AuthLayout />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
