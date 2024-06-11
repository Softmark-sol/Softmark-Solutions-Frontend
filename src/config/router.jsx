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
import WebPlans from '../components/PlansData';
import { AppPlans } from '../components/PlansData';
import DigitalMarketing from '../pages/DigitalMarketing';

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

          {/* Web Plans Page */}
          <Route path='/webPlans' element={<Plans plans={WebPlans}/>} />

          {/* App Plans Page */}
          <Route path='/appPlans' element={<Plans plans={AppPlans}/>} />

          {/* About Us Page */}
          <Route path='/aboutUs' element={<AboutUs />} />

           {/* Digital Marketing Page */}
           <Route path='/digitalMarketing' element={<DigitalMarketing />} />

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
