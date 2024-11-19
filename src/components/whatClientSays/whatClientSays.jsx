import React, { useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TinderCardSlider from "../react-tinder-card/tinderCard";

const images = [
  "https://via.placeholder.com/300x400?text=Image+1",
  "https://via.placeholder.com/300x400?text=Image+2",
  "https://via.placeholder.com/300x400?text=Image+3",
];

const MarketingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        // marginTop:'-50px'
      }}
      
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Text Content */}
        <Grid item xs={12} md={6}>
        <Typography
            variant="h4"
            component="h5"
            gutterBottom
            textAlign="left"
            color="rgb(220, 166, 66)"
            className="container"
            
          >
            Testimonials
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            textAlign="left"
            color="#4599B4"
            fontWeight="bold"
            className="container"
          >
            What Our Clients Say?
          </Typography>
          <Typography className="container" variant="body1" paragraph textAlign="left">
            Who is willing to work with a trustworthy digital marketing company
            that provides services of your choice? Well, of course the business
            oriented minds. All Star Technologies brings to you a variety of
            digital marketing services involving web design & development,
            graphic designs, writing services, SEO (Search Engine Optimization),
            BPO, PPC, and related online marketing services. We have top brains
            working with us on clients’ projects and breaking their own success
            records.
          </Typography>
          <Typography className="container" variant="body1" paragraph textAlign="left">
            Our clients often tell us they're thrilled by our in-depth
            understanding and relentless drive to go above and beyond. They
            trust us to help them thrive, and that's a responsibility All Star
            Technologies team don't take lightly. When our client appreciates
            how we personalize every project and infuse creativity into our
            digital marketing services, it motivates us to work better than
            before.
          </Typography>
        </Grid>

        {/* Right Side: Custom Tinder-like Slider */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <TinderCardSlider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketingSection;
