import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Plans from '../pages/Plans'
import AboutUs from '../pages/AboutUs'
import WhyUs from '../pages/WhyUs'
import ContactForm from '../components/ContactForm'
import Modalform from '../components/Modal-Form'

function Router() {
  return (
    <>
      <BrowserRouter>
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

          {/* Contact Us Component */}
          <Route path='/contactUs' element={<ContactForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Router
