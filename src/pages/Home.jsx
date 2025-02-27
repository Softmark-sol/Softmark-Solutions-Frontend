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
import WorkingProcess from "../components/WorkingProcess";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoCards />
      <ConsultationBanner />
      {/* <CallToAction /> */}
      <MarketingSection />
      <Cards heading={`Our Services`} />
      <OurClients />
      <WorkingProcess/>
      <ConsultationBanner />
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
