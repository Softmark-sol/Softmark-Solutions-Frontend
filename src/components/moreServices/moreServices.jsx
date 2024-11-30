import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/images/web-dev.png";
import img2 from "../../assets/images/mobile-app.png";
import img3 from "../../assets/images/searchengine.png";
import img4 from "../../assets/images/video.png";
import img5 from "../../assets/images/logo-design.png";
import img6 from "../../assets/images/custom.png";
import img7 from "../../assets/images/anime.png";
import img8 from "../../assets/images/outsourcing.png";
import img9 from "../../assets/icons/blockchain.png";

const MoreServices = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      icon: img3,
      label: "SEO",
      route: "/services/seo-services",
    },
    {
      icon: img2,
      label: "App Development",
      route: "/services/app-development-services",
    },
    {
      icon: img4,
      label: "Digital Marketing",
      route: "/digitalMarketing",
    },
    {
      icon: img5,
      label: "Logo Designing",
      route: "/services/graphics-design-services",
    },
    {
      icon: img1,
      label: "Web Development",
      route:
        "/services/website-development-services",
    },
    {
      icon: img8,
      label: "IT Outsourcing",
      route: "/services/ItOutsourcing",
    },
    {
      icon: img6,
      label: "Custom Software",
      route:
        "/services/software-development-services",
    },
    {
      icon: img7,
      label: "Anime Art",
      route: "/services/anime-art-services",
    },
    {
      icon: img9,
      label: "Blockchain Services",
      route: "/services/blockchain-services",
    },
  ];

  const [hovered, setHovered] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E7F3FF",
        padding: "3rem 1rem",
        textAlign: "center",
        marginTop: "50px",
      }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#0056A1",
          marginBottom: "1rem",
          // textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
        }}>
        We Offer More Services Too!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#000",
          marginBottom: "2rem",
        }}>
        From Web Development to Anime Art, we
        cover all your needs with expert precision
        and creativity.
      </Typography>

      <Slider
        {...settings}
        style={{
          width: "80%",
          margin: "0 auto",
        }}>
        {cardData.map((item, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "white",
              //   boxShadow:
              //     hovered === index
              //       ? "0 8px 20px rgba(0, 0, 0, 0.2)"
              //       : "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              padding: "20px",
              textAlign: "center",
              margin: "0 auto",
              //   transform: hovered === index ? "translateY(-8px)" : "translateY(0)",
              cursor: "pointer",
              maxWidth: {
                xs: "300px",
                md: "270px",
              },
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}>
            <CardContent>
              <Box
                component="img"
                src={item.icon}
                alt={item.label}
                sx={{
                  width: "80px",
                  marginBottom: "1rem",
                  display: "block",
                  mx: "auto",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#F2972A",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigate(item.route)
                }>
                {item.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default MoreServices;
