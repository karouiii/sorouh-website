import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";

import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-sorouh-nbg.png";

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
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "/pages/landing-pages/about-us" },
        { name: "contact us", route: "/pages/landing-pages/contact-us" },
        { name: "products", route: "/pages/landing-pages/products-list" },
      ],
    },
    {
      name: "activities",
      items: [
        { name: "Plasters Mortars Lime", route: "/pages/landing-pages/products-list" },
        {
          name: "Plaster Skim Coats Finishes For Rehabilitation",
          route: "/pages/landing-pages/products-list",
        },
        { name: "Underlays Glues Sealants", route: "/pages/landing-pages/products-list" },
        { name: "Waterproofing Solutions", route: "/pages/landing-pages/products-list" },
        { name: "Laying Tiles", route: "/pages/landing-pages/products-list" },
        {
          name: "Restoration, Consolidation And Reinforcement Mortars",
          route: "/pages/landing-pages/products-list",
        },
      ],
    },
    {
      name: "Sorouh Chemicals Co.",
      items: [
        { icon: <LocationOnIcon />, name: "Abdullah Bin Masoud St., Bin Achour, Tripoli - Libya" },
        { icon: <PhoneIcon />, name: "Tel.: +218217299145" },
        { icon: <FaxIcon />, name: "F.: +218213508663" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} crafted by YK .
    </MKTypography>
  ),
};
