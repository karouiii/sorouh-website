// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
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
      icon: <GitHubIcon />,
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
        { name: "about us", route: "/pages/landing-pages/about-us" },
        { name: "contact us", route: "/pages/landing-pages/contact-us" },
        { name: "products", route: "/pages/landing-pages/products" },
      ],
    },
    {
      name: "solutions",
      items: [
        { name: "Consulting services", href: "#" },
        { name: "Marketing", href: "#" },
        { name: "OIL, GAS AND PETROCHEMICALS", href: "#" },
        { name: "Construction", href: "#" },
        { name: "INDUSTRIAL SECTOR", href: "#" },
      ],
    },
    {
      name: "Sorouh Chemicals Co.",
      items: [
        { name: "Abdullah Bin Masoud St., Bin Achour, Tripoli - Libya" },
        { name: "Tel.: +218217299145" },
        { name: "F.: +218213508663" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "#" },
        { name: "privacy policy", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} crafted by YK .
    </MKTypography>
  ),
};
