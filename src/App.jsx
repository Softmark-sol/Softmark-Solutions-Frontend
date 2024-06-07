import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Cards from './components/Cards'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import OurClients from './components/Slider'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <OurClients />
      <ContactForm />
      <Footer />

      <AboutUs />
    </>
  )
}
export default App
