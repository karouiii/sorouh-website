/*<Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <DefaultInfoCard
        icon="content_copy"
        title="Full Documentation"
        description="Built by developers for developers. Check the foundation and you will find
                    everything inside our documentation."
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <DefaultInfoCard
        icon="flip_to_front"
        title="MUI Ready"
        description="The world's most popular react components library for building user interfaces."
      />
    </Grid>
  </Grid>
  <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
    <Grid item xs={12} md={6}>
      <DefaultInfoCard
        icon="price_change"
        title="Save Time & Money"
        description="Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System."
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <DefaultInfoCard
        icon="devices"
        title="Fully Responsive"
        description="Regardless of the screen size, the website content will naturally fit the given resolution."
      />
    </Grid>
  </Grid>
</Grid>;*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="light"
                // icon="touch_app"
                title={<>Sorouh Chemicals Co.</>}
                description="Sorouh Chemicals Co. was established by a group of specialized engineers with long experience in materials science as their expertise in the field of chemicals exceeds twenty years."
                sx={{ color: "black" }}
              />
              <RotatingCardBack
                image={bgBack}
                color="light"
                // title="Sorouh Chemicals Co."
                // description="Sorouh Chemicals Co. specializes in petrochemical, oil and gas, construction and most industries. We are also proud to work with the best global specialized companies to provide high quality professional solutions with integrated teams and consultants, engineers and technical staff."
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="light"
                // icon="touch_app"
                title={<>Sorouh Chemicals Co.</>}
                description="Sorouh Chemicals Co. was established by a group of specialized engineers with long experience in materials science as their expertise in the field of chemicals exceeds twenty years."
              />
              <RotatingCardBack
                image={bgBack}
                color="light"
                // title="Sorouh Chemicals Co."
                // description="Sorouh Chemicals Co. specializes in petrochemical, oil and gas, construction and most industries. We are also proud to work with the best global specialized companies to provide high quality professional solutions with integrated teams and consultants, engineers and technical staff."
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="light"
                // icon="touch_app"
                title={<>Sorouh Chemicals Co.</>}
                description="Sorouh Chemicals Co. was established by a group of specialized engineers with long experience in materials science as their expertise in the field of chemicals exceeds twenty years."
              />
              <RotatingCardBack
                image={bgBack}
                color="light"
                // title="Sorouh Chemicals Co."
                // description="Sorouh Chemicals Co. specializes in petrochemical, oil and gas, construction and most industries. We are also proud to work with the best global specialized companies to provide high quality professional solutions with integrated teams and consultants, engineers and technical staff."
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
