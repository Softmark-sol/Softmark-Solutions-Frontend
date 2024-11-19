import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Img from "../../assets/images/digitalMarketingTeam.jpg"

const MarketingSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={Img}
              alt="Team working together"
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="left" color="#4599B4" fontWeight="bold" className="container">
            Creative Digital Marketing Agency With Proven Success Rate
          </Typography>
          <Typography variant="body1" paragraph textAlign="left" className="container">
            Who is willing to work with a trustworthy digital marketing company
            that provides services of your choice? Well, of course the business
            oriented minds. All Star Technologies brings to you a variety of
            digital marketing services involving web design & development,
            graphic designs, writing services, SEO (Search Engine
            Optimization), BPO, PPC, and related online marketing services. We
            have top brains working with us on clients’ projects and breaking
            their own success records.
          </Typography>
          <Typography variant="body1" paragraph textAlign="left" className="container">
            Your desired outcomes are just a few clicks away. Select the service
            of your choice and get assistance from our passionate and skilled
            digital marketing agency staff. We guarantee timely response and
            complete customer satisfaction with a wholesome experience. You do
            not need to worry about any burdening procedures.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketingSection;
