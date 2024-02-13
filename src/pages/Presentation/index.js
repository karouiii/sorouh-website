import "@coreui/coreui/dist/css/coreui.min.css";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import ScrollTopButton from "pages/LandingPages/ProductsList/ScrollTopButton";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import bgPage from "assets/images/bg-page.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.1),
              rgba(gradients.dark.state, 0.1)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              opacity={0.8}
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Sorouh Chemicals Co.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Solutions for construction and renovation
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundImage: `url(${bgPage})`,
          // backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          // backdropFilter: "saturate(200%) blur(30px)",
          // boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        {/* <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container> */}
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="store"
                title="Products"
                description="Check the possible ways of working with our product."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/products-list",
                  label: "Discover more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="info"
                title="About us"
                description="Read our story from the  beginning to the crafting of our ideas."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/about-us",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="email"
                title="Contact us"
                description="Feel free to contact us, discuss or get the most frequent answers."
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/contact-us",
                  label: "Contact us",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
      </Card>
      <ScrollTopButton />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
