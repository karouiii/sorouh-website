// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import GitHubIcon from "@mui/icons-material/GitHub";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function CenteredFooter({ content }) {
  const { socials, menus, copyright, light } = content;

  return (
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        {menus.map(({ name: title, items }) => (
          <Grid key={title} item xs={10} lg={8} display="flex" justifyContent="space-evenly">
            {items.map(({ name, route, href }) => (
              <Stack
                key={name}
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                spacing={{ xs: 2, lg: 3, xl: 6 }}
                mb={3}
              >
                {href ? (
                  <MKTypography
                    component="a"
                    color={light ? "white" : "secondary"}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    variant="button"
                    fontWeight="regular"
                  >
                    {name}
                  </MKTypography>
                ) : (
                  <MKTypography
                    component={Link}
                    to={route}
                    variant="button"
                    fontWeight="regular"
                    textTransform="capitalize"
                  >
                    {name}
                  </MKTypography>
                )}
              </Stack>
            ))}
          </Grid>
        ))}
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {socials.map(({ icon, link }) => (
              <MKTypography
                key={link}
                component="a"
                href={link}
                variant="body2"
                color={light ? "white" : "secondary"}
                fontWeight="regular"
              >
                {icon}
              </MKTypography>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          {copyright}
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default CenteredFooter;
