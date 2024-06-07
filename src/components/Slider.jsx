import React from 'react';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientsLeftToRight = [
  { id: 1, backgroundColor: '#848484', imageUrl: '/assets/client1.png' },
  { id: 2, backgroundColor: '#848484', imageUrl: '/assets/client2.png' },
  // Add more client objects as needed
];

const clientsRightToLeft = [
  { id: 1, backgroundColor: '#848484', imageUrl: '/assets/client3.png' },
  { id: 2, backgroundColor: '#848484', imageUrl: '/assets/client4.png' },
  // Add more client objects as needed
];

const firstMap = [
  { imageUrl: 'https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png', alt: "react" },
  { imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgyp0cGPFS4V3HEtHeE2hO0udk6QbTA5Kcg&s', alt: "vue" },
  { imageUrl: 'https://cdn.worldvectorlogo.com/logos/angular-3.svg', alt: "angular" },
  { imageUrl: 'https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png', alt: "mern" },
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png', alt: "node" },
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png', alt: "firebase" },
];

const secondMap = [
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png', alt: "aws" },
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png', alt: "azure" },
  { imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/008/384/074/small/seo-sign-logo-search-engine-optimization-symbol-flat-design-illustration-free-vector.jpg', alt: "seo" },
  { imageUrl: 'https://t4.ftcdn.net/jpg/05/04/20/75/360_F_504207567_5GWwqsazyOyHwYXUf3CrqbilLPL4qkYJ.jpg', alt: "digital marketing" },
  { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png', alt: "azure" },
  { imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/008/384/074/small/seo-sign-logo-search-engine-optimization-symbol-flat-design-illustration-free-vector.jpg', alt: "seo" },

];

export default function OurClients() {
  const sliderSettingsLeftToRight = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 0,
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
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
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
                  height: '100px', // Adjust height as needed
                }}
              >
                <Box
                  component="img"
                  src={client.imageUrl}
                  alt={client.alt}
                  sx={{ width: '100px', height: 'auto' }} // Adjust width and height as needed
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
                  height: '100px', 
                }}
              >
                <Box
                  component="img"
                  src={client.imageUrl}
                  alt={client.alt}
                  sx={{ width: '100px', height: 'auto' }} 
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
}
