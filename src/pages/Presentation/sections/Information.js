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
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import consulting from "assets/images/consulting.jpg";
import marketing from "assets/images/marketing.jpg";
import oil from "assets/images/oil.jpg";
import construction from "assets/images/construction.jpg";
import industrial from "assets/images/industrial.jpg";
import vision from "assets/images/vision.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          {/* vision */}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="warning"
                // icon="touch_app"
                title={<>Our vision</>}
                description="We provide fast solutions and unique technologies in high quality. We strive continually to search and develop and find new ways to enable us to fulfill all the needs of our clients based on local and international standards using latest technologies and applications without affecting the safety and quality standards."
              />
              <RotatingCardBack image={vision} color="light" />
            </RotatingCard>
          </Grid>
          {/* CONSULTING SERVICES  */}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="warning"
                // icon="touch_app"
                title={<>Consulting services</>}
                description="
                Sorouh Chemicals Co. leverages extensive experience and top brand partnerships to offer comprehensive support services, guiding companies and contractors through all phases of crucial projects, especially infrastructure initiatives in Libya."
              />
              <RotatingCardBack image={consulting} color="light" />
            </RotatingCard>
          </Grid>
          {/* MARKETING */}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="warning"
                title={<>Marketing</>}
                description="
                Sorouh Chemicals Co. prioritizes client satisfaction by promptly addressing market needs. We've set up a network of accredited distributors across key cities in Libya, including Tripoli, Benghazi, Misrata, Sirte, and Sebha. This strategic network enhances our competitiveness and enables us to deliver superior services to our clients."
              />
              <RotatingCardBack
                image={marketing}
                color="light"
                // title="Sorouh Chemicals Co."
                // description="Sorouh Chemicals Co. specializes in petrochemical, oil and gas, construction and most industries. We are also proud to work with the best global specialized companies to provide high quality professional solutions with integrated teams and consultants, engineers and technical staff."
              />
            </RotatingCard>
          </Grid>
          {/* Oil, Gas and Petrochemicals */}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="warning"
                // icon="touch_app"
                title={<h6>Oil, Gas and Petrochemicals</h6>}
                description="Sorouh plays a pivotal role in Libya's oil, gas, and petrochemical sector, offering top-tier products and technologies. We excel in anti-corrosion solutions, chemicals for drilling, additives for cementation and well maintenance, and industrial chemicals for gas processing. Our focus on quality makes us a leading company in this vital industry."
              />
              <RotatingCardBack image={oil} color="light" />
            </RotatingCard>
          </Grid>
          {/* Construction industrial*/}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="warning"
                // icon="touch_app"
                title={<>Construction</>}
                description="
                Sorouh is committed to understanding clients' needs and delivering innovative construction chemical solutions. Our diverse range includes concrete admixtures, insulation, repair solutions, industrial floorings, and sealing materials, reflecting our dedication to comprehensive and forward-thinking solutions in the construction industry."
              />
              <RotatingCardBack image={construction} color="light" />
            </RotatingCard>
          </Grid>
          {/* Industrial*/}
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                color="warning"
                // icon="touch_app"
                title={<>Industrial sector</>}
                description="To contribute to development of the economic sector in the country and reduce its dependence on natural resources (oil and gas), we supply the most important material of this industrial sector including industrial lubricants and oils, industrial dyes, filling and adhesive material and industrial paints."
              />
              <RotatingCardBack image={industrial} color="light" />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
