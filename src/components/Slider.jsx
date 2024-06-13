import React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DigitalMarketing from "../assets/images/digitalmarketing.png";
import Seo from "../assets/images/seo.png";
import Vue from "../assets/images/vue.png";

const firstMap = [
  { imageUrl: 'https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png', alt: "react" },
  { imageUrl: Vue, alt: "vue" },
  { imageUrl: 'https://cdn.worldvectorlogo.com/logos/angular-3.svg', alt: "angular" },
  { imageUrl: 'https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png', alt: "mern" },
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png', alt: "node" },
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png', alt: "firebase" },
];

const secondMap = [
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png', alt: "aws" },
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png', alt: "azure" },
  { imageUrl: Seo, alt: "seo" },
  { imageUrl: DigitalMarketing, alt: "digital marketing" },
  { imageUrl: 'https://logowik.com/content/uploads/images/301_docker.jpg', alt: "docker" },
  { imageUrl: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png', alt: "next" },
  { imageUrl: 'https://devtop.io/wp-content/uploads/2022/10/react-native-1.png', alt: "react-native" },
];

export default function OurClients() {
  const sliderSettingsLeftToRight = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 2,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
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
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '90px', 
                }}
              >
                <img 
                  src={client.imageUrl}
                  alt={client.alt}
                  style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'cover' }} 
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
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '90px',
                }}
              >
                <img
                  src={client.imageUrl}
                  alt={client.alt}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
}
