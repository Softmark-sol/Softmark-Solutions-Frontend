// TinderCardSlider.js

import React, { useState } from "react";
import TinderCard from "./index"; // Custom TinderCard component if needed
import Avatar from "@mui/material/Avatar"; // Import Avatar from Material-UI
import "./tinder.css"; // Make sure this matches the CSS filename

const sections = [
    {
        title: "MUBARAKPUR PARAMEDICAL COLLEGE",
        content: "Incredible work by All Star Technologies! When starting our paramedical college in Mubarak Pur, India, we faced stiff challenges...",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Website Customization and Strategic Facebook Advertising",
        rating: 5,
      },
      {
        title: "OTHER CLIENT",
        content: "Amazing work that exceeded expectations. Their dedication and skill made a huge difference for our project.",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Social Media Campaigns and SEO Optimization",
        rating: 4,
      },
      {
        title: "MUBARAKPUR PARAMEDICAL COLLEGE",
        content: "Incredible work by All Star Technologies! When starting our paramedical college in Mubarak Pur, India, we faced stiff challenges...",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Website Customization and Strategic Facebook Advertising",
        rating: 5,
      },
      {
        title: "OTHER CLIENT",
        content: "Amazing work that exceeded expectations. Their dedication and skill made a huge difference for our project.",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Social Media Campaigns and SEO Optimization",
        rating: 4,
      },
      {
        title: "MUBARAKPUR PARAMEDICAL COLLEGE",
        content: "Incredible work by All Star Technologies! When starting our paramedical college in Mubarak Pur, India, we faced stiff challenges...",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Website Customization and Strategic Facebook Advertising",
        rating: 5,
      },
      {
        title: "OTHER CLIENT",
        content: "Amazing work that exceeded expectations. Their dedication and skill made a huge difference for our project.",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Social Media Campaigns and SEO Optimization",
        rating: 4,
      },
      {
        title: "MUBARAKPUR PARAMEDICAL COLLEGE",
        content: "Incredible work by All Star Technologies! When starting our paramedical college in Mubarak Pur, India, we faced stiff challenges...",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Website Customization and Strategic Facebook Advertising",
        rating: 5,
      },
      {
        title: "OTHER CLIENT",
        content: "Amazing work that exceeded expectations. Their dedication and skill made a huge difference for our project.",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Social Media Campaigns and SEO Optimization",
        rating: 4,
      },
      {
        title: "MUBARAKPUR PARAMEDICAL COLLEGE",
        content: "Incredible work by All Star Technologies! When starting our paramedical college in Mubarak Pur, India, we faced stiff challenges...",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Website Customization and Strategic Facebook Advertising",
        rating: 5,
      },
      {
        title: "OTHER CLIENT",
        content: "Amazing work that exceeded expectations. Their dedication and skill made a huge difference for our project.",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Social Media Campaigns and SEO Optimization",
        rating: 4,
      },
      {
        title: "MUBARAKPUR PARAMEDICAL COLLEGE",
        content: "Incredible work by All Star Technologies! When starting our paramedical college in Mubarak Pur, India, we faced stiff challenges...",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Website Customization and Strategic Facebook Advertising",
        rating: 5,
      },
      {
        title: "OTHER CLIENT",
        content: "Amazing work that exceeded expectations. Their dedication and skill made a huge difference for our project.",
        imageUrl: "https://via.placeholder.com/400x300",
        subContent: "Social Media Campaigns and SEO Optimization",
        rating: 4,
      },
];

function TinderCardSlider() {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, sectionTitle) => {
    console.log("Swiped " + direction + " on " + sectionTitle);
    setLastDirection(direction);
  };

  const outOfFrame = (title) => {
    console.log(title + " left the screen!");
  };

  return (
    <div className="cardContainer">
      {sections.map((section, index) => (
        <TinderCard
          className="swipe"
          key={index}
          onSwipe={(dir) => swiped(dir, section.title)}
          onCardLeftScreen={() => outOfFrame(section.title)}
        >
          <div className="testimonialCard">
            {/* Use Avatar component */}
            <Avatar
              src={section.imageUrl}
              alt={section.title}
              className="cardAvatar"
              sx={{ width: 80, height: 80 }} // Set size of the avatar
            />
            <div className="cardContent">
              <h2 className="cardTitle">{section.title}</h2>
              <p className="cardText">{section.content}</p>
              <p className="cardSubContent">{section.subContent}</p>
              <div className="starRating">
                {"★".repeat(section.rating) + "☆".repeat(5 - section.rating)}
              </div>
            </div>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCardSlider;
