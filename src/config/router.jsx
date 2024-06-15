import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs";
import WhyUs from "../pages/WhyUs";
import ContactForm from "../components/ContactForm";
import Ourservices from "../pages/Ourservices";
import ScrollToTop from "../components/ScrollTop";
import Cards from "../components/Cards";
import WebPlans, { LogoPlans } from "../components/PlansData";
import { AppPlans } from "../components/PlansData";
import DigitalMarketing from "../pages/DigitalMarketing";
import PlansWeb from "../pages/PlansWeb";
import PlansApp from "../pages/PlansApp";
import NotFound from "../components/NotFound";
import Seo from "../pages/Seo";
import Logo from "../pages/PlansLogo";
import  ServicesData  from "../components/Data";

function Router() {
  return (
    <>
      <BrowserRouter>
        {/* To Scroll on top of the Page */}
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Web Plans Page */}
          <Route path="/webPlans" element={<PlansWeb plans={WebPlans} />} />

          {/* App Plans Page */}
          <Route path="/appPlans" element={<PlansApp plans={AppPlans} />} />

          {/* Logo Page */}
          <Route path="/logoPlans" element={<Logo plans={LogoPlans} />} />

          {/* About Us Page */}
          <Route path="/aboutUs" element={<AboutUs />} />

          {/* Digital Marketing Page */}
          <Route path="/digitalMarketing" element={<DigitalMarketing />} />

          {/* Why Page */}
          <Route path="/whyUs" element={<WhyUs />} />

          {/* SEO Page*/}
          <Route path="/seo" element={<Seo />} />

          {/* Our Work Page*/}
          <Route path="/Ourservices" element={<Ourservices />} />

          {/* Contact Us Component */}
          <Route path="/contactUs" element={<ContactForm />} />

          {/* Services Component */}
          <Route path="/services" element={<Cards data={ServicesData} heading={`Our Services`} />} />

          {/* 404*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
