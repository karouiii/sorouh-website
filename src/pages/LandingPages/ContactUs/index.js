// @mui material components
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
// import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import centeredFooterRoutes from "centeredFooter.routes";

// Form
import { useForm, ValidationError } from "@formspree/react";

// Image
import bgImage from "assets/images/illustrations/contact-us.jpg";
import { useEffect, useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xzbndyrl");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (state.succeeded && !dismissed) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded, dismissed]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDismiss = () => {
    setDismissed(true);
  };

  return (
    <>
      <DefaultNavbar routes={routes} sticky />

      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{
              backgroundImage: ({ palette: { gradients }, functions: { rgba, linearGradient } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
            }}
          >
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                <MKTypography variant="h3" color="white" mb={1}>
                  Contact Information
                </MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                  Fill up the form and our Team will get back to you within 2 days.
                </MKTypography>
                <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    (+218) 217 299 145
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    support@sorouh.com --TO CHANGE--
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    Abdullah Bin Masoud St., Bin Achour, Tripoli - Libya
                  </MKTypography>
                </MKBox>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="gold"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
              sx={{
                background:
                  "radial-gradient(at right center, rgba(163, 121, 19, 1.0), rgba(1, 1, 1, 1.0));",
              }}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="standard"
                      label="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="standard"
                      label="How can we help you?"
                      placeholder="Describe your problem"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="contained" color="gold">
                    Send Message
                  </MKButton>
                  {state.succeeded && !dismissed && (
                    <div style={{ color: "green", marginTop: "1rem" }}>
                      We will get back to you soon!
                      <MKButton onClick={handleDismiss} color="danger">
                        Dismiss
                      </MKButton>
                    </div>
                  )}
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        {/* <DefaultFooter content={footerRoutes} /> */}
        <CenteredFooter content={centeredFooterRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
