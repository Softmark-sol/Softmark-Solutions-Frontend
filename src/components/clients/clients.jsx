import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Buzznerd from "../../assets/icons/buzznerd.png";
import Flatlead from "../../assets/icons/flatlead.png";
import JcRoofing from "../../assets/icons/jcRofing.png";
import Lawerence from "../../assets/icons/lawerece.png";
import Primo from "../../assets/icons/primo.png";
import Sassify from "../../assets/icons/sassify.avif";
import Techlancer from "../../assets/icons/techlancer.png";

// Sample data with all client logos and names
const clients = [
  { name: 'Buzznerd', logo: Buzznerd },
  { name: 'Fleet Lead', logo: Flatlead },
  { name: 'JC Roofing', logo: JcRoofing },
  { name: 'Lawerence', logo: Lawerence },
  { name: 'Primo', logo: Primo },
  { name: 'Sassify', logo: Sassify },
  { name: 'Techlancer', logo: Techlancer },
];

function ClientsSection() {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of logos to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Box sx={{ textAlign: 'center', padding: '2rem 0', backgroundColor: '#E7F3FF' }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: "bold", color: "#F2972A" }}>
        Clients Who Trust Us
      </Typography>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <Box key={index} sx={{ padding: '1rem' }}>
            <Box
              component="img"
              src={client.logo}
              alt={client.name}
              sx={{
                width: 'auto',
                height: '80px',
                objectFit: 'contain',
                margin: '0 auto',
                padding: '1rem',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: 2,
              }}
            />
            <Typography variant="body1" sx={{ mt: 1 }}>
              {client.name}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ClientsSection;
