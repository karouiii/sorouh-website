import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";

import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent="center"
            mx="auto"
            textAlign="center"
            flexDirection="column"
          >
            <MKTypography variant="h3" color="white">
              Do you want to
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              Discover our shop &amp; products?
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Cause if you do, we are offering a large variety that will fulfill your needs.
            </MKTypography>
            <Link to={"/pages/landing-pages/products-list"}>
              <MKButton variant="gradient" color="gold" size="large" sx={{ mb: 2 }}>
                Discover
              </MKButton>
            </Link>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
