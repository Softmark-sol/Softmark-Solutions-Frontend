import React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DigitalMarketing from "../assets/icons/digital-marketing.png";
import Seo from "../assets/icons/seo.png";
import Vue from "../assets/icons/vue.png";
import DockerLogo from "../assets/icons/docker.png";
import MernLogo from "../assets/icons/docker.png";
import react from "../assets/icons/react.png";
import reactNative from "../assets/icons/sql.png";
import angular from "../assets/icons/angular.png";
import node from "../assets/icons/node.png";
import firebase from "../assets/icons/firebase.png";
import amazon from "../assets/icons/aws.png";
import azure from "../assets/icons/azure.png";
import next from "../assets/icons/next.png";

const firstMap = [
  {
    imageUrl:react,
    alt: "react",
  },
  { imageUrl: Vue, alt: "vue" },
  {
    imageUrl: angular,
    alt: "angular",
  },
  {
    imageUrl: MernLogo,
    alt: "mern",
  },
  {
    imageUrl:node,
    alt: "node",
  },
  {
    imageUrl:firebase,
    alt: "firebase",
  },
];

const secondMap = [
  {
    imageUrl:amazon,
    alt: "aws",
  },
  {
    imageUrl:azure,
    alt: "azure",
  },
  { imageUrl: Seo, alt: "seo" },
  { imageUrl: DigitalMarketing, alt: "digital marketing" },
  {
    imageUrl: DockerLogo,
    alt: "docker",
  },
  {
    imageUrl:next,
    alt: "next",
  },
  {
    imageUrl: reactNative,
    alt: "react-native",
  },
];

export default function OurClients() {
  const sliderSettingsLeftToRight = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 3,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1393,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sliderSettingsRightToLeft = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 6,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1393,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <Box my={4}>
        <Box mt={4}>
          <Slider {...sliderSettingsLeftToRight}>
            {firstMap.map((client, index) => (
              <Box
                key={index}
                p={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "90px",
                  backgroundColor: "#f6f7f7",
                }}
              >
                <img
                  src={client.imageUrl}
                  alt={client.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
        <Box mt={4}>
          <Slider {...sliderSettingsRightToLeft}>
            {secondMap.map((client, index) => (
              <Box
                key={index}
                p={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "90px",
                  backgroundColor: "#f6f7f7",
                }}
              >
                <img
                  src={client.imageUrl}
                  alt={client.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
}
