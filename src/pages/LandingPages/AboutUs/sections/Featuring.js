// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";

import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
import weber from "assets/images/logos/gray-logos/weber-saint-gobain.svg";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container spacing={3} sx={{ mb: 12 }} justifyContent={"center"}>
          <Grid item xs={6} md={6} lg={6}>
            <MKBox component="img" src={weber} alt="weber" width="100%" opacity={0.7} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={50}
              suffix="+"
              color="gold"
              title="Products"
              description="Of “high-performing” level are led by a certified project manager"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={3400}
              separator=","
              suffix="+"
              color="gold"
              title="Hours"
              description="That meets quality standards required by our clients"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              color="gold"
              description="Actively engage team members that finishes on time"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
