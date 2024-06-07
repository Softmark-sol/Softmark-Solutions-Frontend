import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Plans from "../pages/Plans";
import AboutUs from "../pages/AboutUs";

function Router() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
