import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Plans from '../pages/Plans';
import AboutUs from '../pages/AboutUs';
import WhyUs from '../pages/WhyUs';
import ContactForm from '../components/ContactForm';
import Ourservices from '../pages/Ourservices';
import ScrollToTop from '../components/ScrollTop'; 
import Cards from '../components/Cards';

function Router() {
  return (
    <>
      <BrowserRouter>
      {/* To Scroll on top of the Page */}
        <ScrollToTop /> 
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path='/' element={<Home />} />

          {/* Plans Page */}
          <Route path='/plans' element={<Plans />} />

          {/* About Us Page */}
          <Route path='/aboutUs' element={<AboutUs />} />

          {/* Why Page */}
          <Route path='/whyUs' element={<WhyUs />} />
          
          {/* Our Work Page*/}
          <Route path='/Ourservices' element={<Ourservices />} />

          {/* Contact Us Component */}
          <Route path='/contactUs' element={<ContactForm />} />

          {/* Services Component */}
          <Route path='/services' element={<Cards />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
