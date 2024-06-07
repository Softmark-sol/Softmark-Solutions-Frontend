
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Cards/>
      <ContactForm/>
      <Footer/>
    </>
  );
};
export default App;

