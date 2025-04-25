import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
          </Route>

          <Route path="/auth" element={<AuthLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
