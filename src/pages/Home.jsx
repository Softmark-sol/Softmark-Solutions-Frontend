import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import OurClients from "../components/Slider";
import ContactForm from "../components/ContactForm";
import ScrollUpButton from "../components/ScrollUpButton";
import WhoWeAre from "../components/whoWeAre/whoWeAre";
import CallToAction from "../components/callToAction/callToActions";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards heading={`Our Services`} />
      <OurClients />
      <WhoWeAre />
      <CallToAction />
      <ContactForm />
      <ScrollUpButton />
    </>
  );
};

export default Home;
