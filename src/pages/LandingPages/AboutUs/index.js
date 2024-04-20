import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";

import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// About Us page sections
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Download from "pages/Presentation/sections/Download";

// Routes
import routes from "routes";
import centeredFooterRoutes from "centeredFooter.routes";

// Images
import bgImage from "assets/images/bg1.jpg";
function AboutUs() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              About Us
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              We provide fast solutions and unique technologies in high quality.
            </MKTypography>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.facebook.com/sorouh.chimecals"
                // mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              {/* <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography> */}
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography
            variant="h1"
            color="text"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            About Us
          </MKTypography>
          <MKTypography variant="body1" color="text" opacity={0.8} mt={1} mb={3}>
            Sorouh Chemicals Co. was established by a group of specialized engineers with long
            experience in materials science as their expertise in the field of chemicals exceeds
            twenty years. Sorouh Chemicals Co. is specialized in petrochemicals, oil and gas,
            construction and most industrial fields. We also take pride in cooperating with the best
            globally specialized companies to provide high quality professional solutions by an
            integrated teams and consultants, engineers and technical staff.
          </MKTypography>
        </Grid>
        <Container py={12}>
          <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="query_stats"
                title="Our Vision"
                description="We provide fast solutions and unique technologies in high quality. We strive continually to search and develop and find new ways to enable us to fulfill all the needs of our clients based on local and international standards using latest technologies and applications without affecting the safety and quality standards."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="factory"
                title="Industrial Sector"
                description="To contribute to development of the economic sector in the country and reduce its dependence on natural resources (oil and gas), we supply the most important material of this industrial sector including industrial lubricants and oils, industrial dyes, filling and adhesive material and industrial paints."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="model_training"
                title="Consulting Services"
                description="With extensive experience and partnerships with top brands, Sorouh Chemicals Co. offers comprehensive consultation and support services from project planning to establishment, operation, and development. We provide technical guidance to various companies and contractors involved in crucial projects, particularly infrastructure projects in Libya."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="oil_barrel"
                title="Oil, Gas and Petrochemicals"
                description="Sorouh plays a pivotal role in Libya's oil, gas, and petrochemical sector, offering top-tier products and technologies. We excel in anti-corrosion solutions, chemicals for drilling, additives for cementation and well maintenance, and industrial chemicals for gas processing. Our focus on quality makes us a leading company in this vital industry."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="construction"
                title="Construction"
                description="
                Sorouh is dedicated to understanding clients' needs through close engagement and delivering innovative, efficient solutions in construction chemicals. Our diverse range includes concrete admixtures, insulation systems, repair solutions, industrial floorings, and various sealing and adhesive materials, showcasing our commitment to comprehensive and forward-thinking construction industry solutions."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="contained"
                color="gold"
                icon="people"
                title="Marketing"
                description="Sorouh Chemicals Co. is aware that proper response to market requirements and client needs form the most important and ideal methods to gain clients satisfaction. Therefore, it has established a network of accredited distributers to cover cities all over Libya (i.e Tripoli, Benghazi, Misrata, Sirte and Sebha) which has enabled us to have a competitive edge thus providing a better service to our clients."
              />
            </Grid>
          </Grid>
        </Container>
        <Download />
        <Featuring />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <CenteredFooter content={centeredFooterRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
