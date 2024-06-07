

import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import OurClients from '../components/Slider'
import ContactForm from '../components/ContactForm'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Cards/>
      <OurClients/>
      <ContactForm/>
    </div>
  )
}

export default Home
