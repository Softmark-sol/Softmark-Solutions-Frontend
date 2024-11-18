import React from "react";
import { Box, Typography, Button, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

// const pricingPlans = [
//   {
//     title: "Basic",
//     price: "£199",
//     features: [
//       "1 Landing Page",
//       "2 Stock Images",
//       "1 jQuery Slider Banner",
//       "Contact/Query Form",
//     ],
//   },
//   {
//     title: "Standard",
//     price: "£349",
//     features: [
//       "3 Page Website",
//       "5 Stock Photos",
//       "3 Banner Designs",
//       "1 jQuery Slider Banner",
//     ],
//   },
//   {
//     title: "Professional",
//     price: "£449",
//     features: [
//       "5 Pages Website",
//       "CMS/Admin Panel Support",
//       "8 Stock Images",
//       "5 Banner Designs",
//       "5 Pages Website",
//       "CMS/Admin Panel Support",
//       "8 Stock Images",
//       "5 Banner Designs",
//     ],
//   },
// ];

const PricingCards = ({pricingPlans}) => {
    const navigate = useNavigate()
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="container"
    >
      <Grid container spacing={3} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 350,
                height: 450,
                borderRadius: "15px",
                margin: "auto",
                border: "1px solid #e0e0e0",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "#4599B4",
                  color: "white",
                  textAlign: "center",
                  padding: "20px 15px",
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {plan.name}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ marginTop: "10px" }}
                >
                  {plan.price}
                </Typography>
                <Box
                  sx={{
                    width: "50%",
                    height: "2px",
                    backgroundColor: "white",
                    margin: "10px auto",
                  }}
                />
              </Box>

              <CardContent
                sx={{
                  height: 220, 
                  overflowY: "auto",
                  padding: "15px",
                  textAlign: "center",
                  scrollBehavior: "smooth",
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#4599B4",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#f1f1f1",
                  borderRadius: "10px",
                },
                }}
              >
                {plan.features.map((feature, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    gutterBottom
                    sx={{
                      fontSize: "0.95rem",
                      color: "#333",
                      borderBottom: i < plan.features.length - 1 ? "1px solid #e0e0e0" : "none",
                      padding: "10px",
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </CardContent>

              <Box
                sx={{ 
                  textAlign: "center",
                  padding: "10px",
                  backgroundColor: "white",
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                }}
              >
                <Button
                onClick={()=>navigate("/contactUs")}
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #FF512F, #F3972B)",
                    color: "white",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(to right, #F3972B, #FF512F)",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingCards;
