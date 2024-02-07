// react-router-dom components
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";
import bgLogoAr from "assets/images/logo-sorouh-ar.jpg";

function DesignBlocks() {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const selectedTitleRef = useRef(null);

  const handleTitleClick = (title) => {
    setSelectedTitle(selectedTitle === title ? null : title);
    // Scroll to the selected title after state update
    if (selectedTitleRef.current) {
      selectedTitleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const renderData = data.map(({ title, description, items }) => (
    <Grid
      container
      spacing={3}
      sx={{ mb: 5 }}
      key={title}
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      ref={selectedTitle === title ? selectedTitleRef : null}
    >
      <Grid
        item
        xs={12}
        lg={3}
        onClick={() => handleTitleClick(title)}
        style={{ cursor: "pointer" }}
      >
        <MKBox
          position="sticky"
          top="100px"
          pb={{ xs: 2, lg: 6 }}
          border="2px solid #a37913"
          borderRadius="xl"
          px={3}
          pt={3.5}
          bgColor="white"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.1),
                rgba(gradients.dark.state, 0.1)
              )}, url(${bgLogoAr})`,
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <MKTypography
            fontSize={{ xs: 12, lg: 20 }}
            variant="h6"
            fontWeight="bold"
            // mb={1}
            mr={10}
            sx={{ color: "#a37913" }}
          >
            {title}
          </MKTypography>
        </MKBox>
      </Grid>
      {selectedTitle === title && (
        <Grid item xs={12} lg={9}>
          <MKTypography
            variant="body1"
            color="black"
            fontWeight="regular"
            mb={1}
            pr={2}
            sx={{ textAlign: "center" }}
          >
            {description}
          </MKTypography>
          <Grid container spacing={3}>
            {items.slice(0, 4).map(({ image, name, itemDescription, count, route, pro }) => (
              <Grid item xs={12} md={3} sx={{ mb: 2 }} key={name}>
                <Link to={pro ? "/" : route}>
                  <ExampleCard
                    image={image}
                    name={name}
                    itemDescription={itemDescription}
                    count={count}
                    pro={pro}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  ));

  return (
    <MKBox component="section" my={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            Huge collection of products
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We have arranged for you this rich catalogue
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
