import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import OurClients from "../components/Slider";
import ContactForm from "../components/ContactForm";
import ScrollUpButton from "../components/ScrollUpButton";
import WhoWeAre from "../components/whoWeAre/whoWeAre";
import CallToAction from "../components/callToAction/callToActions";
import InfoCards from "../components/infoCards/infoCards";
import ConsultationBanner from "../components/consultationBanner/consultationBanner";
import MarketingSection from "../components/marketingSection/marketingSection";
import ClientsSection from "../components/clients/clients";
import WhatClientSays from "../components/whatClientSays/whatClientSays";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoCards />
      <ConsultationBanner />
      {/* <CallToAction /> */}
      <Cards heading={`Our Services`} />
      <MarketingSection />
      <OurClients />
      {/* <WhoWeAre /> */}
      <WhatClientSays />
      <ClientsSection />
      {/* <ContactForm /> */}
      <ConsultationBanner />
      <ScrollUpButton />
    </>
  );
};

export default Home;
