import React, { useState } from "react";
import TinderCard from "./index"; 
import Avatar from "@mui/material/Avatar"; 
import "./tinder.css"; 

const sections = [
  {
    title: "Web Development Excellence",
    content:
      "Our website was transformed by All Star Technologies. The team provided a seamless and modern interface that boosted our user engagement dramatically.",
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    subContent: "Custom Web Development and Responsive Design",
    rating: 5,
  },
  {
    title: "SEO Optimization Success",
    content:
      "All Star Technologies took our website's ranking to the next level. Within months, we saw a significant increase in organic traffic and customer inquiries.",
    imageUrl: "https://randomuser.me/api/portraits/women/20.jpg",
    subContent: "Keyword Research and On-Page SEO Strategies",
    rating: 5,
  },
  {
    title: "App Development Expertise",
    content:
      "We needed a mobile app for our business, and All Star Technologies delivered beyond our expectations. The app is user-friendly and highly functional.",
    imageUrl: "https://randomuser.me/api/portraits/men/30.jpg",
    subContent: "Cross-Platform App Development",
    rating: 5,
  },
  {
    title: "Digital Marketing Revolution",
    content:
      "The social media campaigns and PPC strategies designed by All Star Technologies gave our business the visibility we needed to grow our brand online.",
    imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
    subContent: "Social Media Campaigns and PPC Advertising",
    rating: 5,
  },
  {
    title: "Anime Art Creativity",
    content:
      "Their anime art services were exceptional! They captured the essence of our vision and brought it to life in a way that was beyond amazing.",
    imageUrl: "https://randomuser.me/api/portraits/men/50.jpg",
    subContent: "Custom Anime Art and Illustrations",
    rating: 5,
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
