import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./portfolioDetail.css";

import web1 from "../../assets/portfolio/web-chif-portfolio.jpg";
import web2 from "../../assets/portfolio/web-2.jpg";
import web3 from "../../assets/portfolio/web-3.jpg";
import web4 from "../../assets/portfolio/web-4.jpg";
import web6 from "../../assets/portfolio/web-6.jpg";
import web7 from "../../assets/portfolio/web-7.jpg";
import web8 from "../../assets/portfolio/web-8.jpg";
import web9 from "../../assets/portfolio/screencapture-needsandluxuries-pk-2024-10-18-22_58_09.png";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";



import App1 from "../../assets/portfolio/App-1.jpg";
import App2 from "../../assets/portfolio/App-2.jpg";
import App3 from "../../assets/portfolio/App-3.jpg";
import App4 from "../../assets/portfolio/App-4.jpg";
import App5 from "../../assets/portfolio/App-5.jpg";
import App6 from "../../assets/portfolio/App-6.jpg";

import USA from "../../assets/portfolio/USA-Notary.png";
import CRM from "../../assets/portfolio/CRM.png";

import anime1 from '../../assets/images/portraites/anime1.jpg'
import anime2 from '../../assets/images/portraites/anime2.jpg'
import anime3 from '../../assets/images/portraites/anime3.jpg'
import anime4 from '../../assets/images/portraites/anime4.jpg'




const PortfolioDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [portfolioItems, setPortfolioItems] = useState([]);

  const portfolioData = {
    web: [
      { path: web1, title: "MasterChef's Kitchen", description: "A stunning culinary website that showcases the essence of fine dining with an elegant and user-friendly interface." },
      { path: web2, title: "Bio-Analytical E-commerce", description: "A robust and secure e-commerce platform offering a seamless shopping experience for bio-analytical equipment and services" },
      { path: web3, title: "Next-Level Food Experience", description: "An innovative portfolio site for a modern food brand, blending creativity and functionality in a visually striking layout." },
      { path: web4, title: "USA Notary Services", description: "A streamlined online platform for notary services, focusing on user accessibility and service transparency." },
      { path: web6, title: "Photographic Masterpiece", description: "A visually captivating website for a photography studio, designed to highlight the artistry of digital marketing and creative expression." },
      { path: web7, title: "Digital Marketing Solutions", description: "A comprehensive digital marketing website focused on lead generation and brand development." },
      { path: web8, title: "Marketing Agency Portal", description: "A vibrant and dynamic platform designed for a modern marketing agency, optimized for digital campaigns and client engagement" },
      { path: web9, title: "E-Commerce Excellence", description: "An intuitive and powerful e-commerce website with advanced features, ensuring an enhanced shopping experience." },
    ],
    app: [
      { path: App1, title: "Fintech App", description: "Android e-wallet solution" },
      { path: App2, title: "Health Care Wallet", description: "An Android app offering secure and easy e-wallet solutions for healthcare transactions and services" },
      { path: App3, title: "Smart Grocery App", description: "A convenient grocery delivery app providing a user-friendly shopping experience with advanced sorting and tracking features." },
      { path: App4, title: "Friendship Network App", description: "An interactive social networking app designed to foster meaningful connections through shared interests and activities." },
      { path: App5, title: "E-Learning Platform App", description: "A mobile platform enabling seamless learning with user-friendly features for remote education and professional development" },
      { path: App6, title: "Sunglasses Shopping App", description: "An e-commerce app dedicated to sunglasses shopping, featuring real-time virtual try-ons and personalized product recommendations" },
    ],
    logo: [
      { path: logo1, title: "Coffee Business Logo", description: "A sleek and modern logo designed for a high-end coffee brand, blending simplicity with bold, memorable visuals" },
      { path: logo2, title: "Creative Art Brand Logo", description: "An artistic and vibrant logo for a creative brand, combining dynamic shapes with expressive typography" },
      { path: logo3, title: "Modern Tech Logo", description: "A minimalist yet impactful logo for a technology brand, designed to convey innovation and reliability." },
    ],
    anime: [
      { 
        path: anime1, 
        title: "Adventurous Spirit", 
        description: "A lively and energetic character with a love for adventure, embodying positivity and confidence." 
      },
      { 
        path: anime2, 
        title: "Modern Warrior", 
        description: "A strong and fearless female character with unique braided hair, exuding both strength and charm." 
      },
      { 
        path: anime3, 
        title: "Mystery Solver", 
        description: "A mysterious, intelligent character with a calm demeanor, set against a dark and intriguing background." 
      },
      { 
        path: anime4, 
        title: "Urban Rebel", 
        description: "A cool and collected urban character, with a casual street style, embodying the energy of city life." 
      },
    ],

    custom: [
      { 
        path: web4, 
        title: "USA Notary Services", 
        description: "A streamlined online platform for notary services, focusing on user accessibility and service transparency." 
      },
      { 
        path: web9, 
        title: "E-Commerce Excellence", 
        description: "An intuitive and powerful e-commerce website with advanced features, ensuring an enhanced shopping experience." 
      },
      { 
        path: USA, 
        title: "USA Notary Services", 
        description: "A streamlined online platform for notary services, focusing on user accessibility and service transparency." 
      },
      { 
        path: CRM, 
        title: "CRM Services", 
        description: "Comprehensive customer relationship management solutions that streamline interactions and enhance client engagement." 
      },
    ]
    
  };

  useEffect(() => {
    if (type in portfolioData) {
      setPortfolioItems(portfolioData[type]);
    } else {
      navigate("/404");
    }
  }, [type, navigate]);

  return (
    <div className="portfolio-detail-page">
      <h1 className="portfolio-header">{type.charAt(0).toUpperCase() + type.slice(1)} Development Portfolio</h1>
      <p className="portfolio-intro">
        Explore our diverse range of {type} development projects, each designed with attention to detail and functionality.
      </p>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <img src={item.path} alt={item.title} className="portfolio-img" />
            <div className="portfolio-info">
              <h2 className="portfolio-title">{item.title}</h2>
              <p className="portfolio-description" style={{textAlign:'left'}}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="contact-btn" style={{marginTop:'25px', padding:'25px'}} onClick={() => navigate("/contactUs")}>
          Get A Free Inquery
        </button>
    </div>
  );
};

export default PortfolioDetail;
