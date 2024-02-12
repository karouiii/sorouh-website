// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
// import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
// import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
// import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
// import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
// import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
// import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";
import weber from "assets/images/logos/gray-logos/weber-saint-gobain.svg";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }} justifyContent={"center"}>
          <Grid item xs={6} md={6} lg={6}>
            <MKBox component="img" src={weber} alt="weber" width="100%" opacity={0.7} />
          </Grid>
          {/* <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.7} />
          </Grid> */}
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={100}
              separator=","
              color="warning"
              title="Products"
              description="Of “high-performing” level are led by a certified project manager"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={3400}
              separator=","
              suffix="+"
              color="warning"
              title="Hours"
              description="That meets quality standards required by our users"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              color="warning"
              description="Actively engage team members that finishes on time"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
