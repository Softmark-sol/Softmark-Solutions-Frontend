import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import OurClients from "../components/Slider";
import ContactForm from "../components/ContactForm";
import ScrollUpButton from "../components/ScrollUpButton";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />

      <Cards heading={`Our Services`} />
      <OurClients />
      <Testimonials />
      <ContactForm />
      <ScrollUpButton />
    </>
  );
};

export default Home;
