import React from 'react'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards'
import OurClients from '../components/Slider'
import ContactForm from '../components/ContactForm'
import ScrollUpButton from '../components/ScrollUpButton'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Cards/>
      <OurClients/>
      <ContactForm/>
      <ScrollUpButton/>
    </>
  )
}

export default Home
