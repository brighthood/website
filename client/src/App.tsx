import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/ui/Loading";
import ProtectedRoute from "./layout/ProtectedRoute";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import DashbordLayout from "./layout/DashbordLayout";
import Profile from "./pages/Profile";
const LandingPage = lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashbordLayout />}>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </ Suspense >
  );
}

export default App;
