import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import OurClients from '../components/Slider'
import ContactForm from '../components/ContactForm'
import AboutUs from './AboutUs'
import WhyusCards from '../components/Why-us/WhyusCards'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Cards/>
      <OurClients/>
      <ContactForm/>
    </>
  )
}

export default Home
