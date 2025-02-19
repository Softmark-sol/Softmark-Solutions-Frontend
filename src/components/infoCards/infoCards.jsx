import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Projects from "../../assets/icons/projects.png";
import Websites from "../../assets/icons/websites.png";
import Review from "../../assets/icons/reviws.png";
import Clients from "../../assets/icons/clients.png";

const InfoCards = () => {
  const cardData = [
    {
      icon: Review,
      number: "100+",
      label: "Reviews",
    },
    {
      icon: Projects,
      number: "1200+",
      label: "Projects",
    },
    {
      icon: Websites,
      number: "500+",
      label: "Websites",
    },
    {
      icon: Clients,
      number: "150+",
      label: "Satisfied Clients",
    },
  ];

  const [hovered, setHovered] = useState(null);

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}>
      <Slider
        {...settings}
        style={{
          width: "80%",
          margin: "0 auto",
        }}>
        {cardData.map((item, index) => (
          <div key={index}>
            <Card
              style={{
                backgroundColor: "white",
                boxShadow:
                  hovered === index
                    ? "0 8px 20px rgba(0, 0, 0, 0.2)"
                    : "0 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: 8,
                transition: "all 0.3s ease",
                padding: "20px",
                textAlign: "center",
                maxWidth: "270px",
                margin: "0 auto",
                transform:
                  hovered === index
                    ? "translateY(-8px)"
                    : "translateY(0)",
                cursor: "pointer",
              }}
              onMouseEnter={() =>
                setHovered(index)
              } 
              onMouseLeave={() =>
                setHovered(null)
              } 
            >
              <CardContent>
                <div>
                  <img
                    style={{
                      width: "80px",
                      marginBottom: "10px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src={item.icon}
                    alt={item.label}
                  />
                </div>
                <Typography
                  variant="h5"
                  style={{
                    fontSize: "2.5rem",
                    color: "#4599B4",
                    fontWeight: "bold",
                  }}>
                  {item.number}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "1.5rem",
                    color: "#F2972A",
                  }}>
                  {item.label}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfoCards;
