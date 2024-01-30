// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-sorouh.jpg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Sorouh",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/sorouh.chimecals",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <YouTubeIcon />,
      link: "#",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "Home", route: "layouts/pages/presentation" },
        { name: "about us", route: "/pages/landing-pages/about-us" },
        { name: "contact us", route: "/pages/landing-pages/contact-us" },
        { name: "products", route: "/pages/landing-pages/products" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} crafted by YK .
    </MKTypography>
  ),
};
