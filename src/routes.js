// @mui material components
// import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";
// import HomeIcon from "@mui/icons-material/Home";
// import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import BuildIcon from "@mui/icons-material/Build";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
// import ContactUs from "layouts/pages/landing-pages/contact-us";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";
// import PresentationPage from "layouts/pages/presentation";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";
// import Products from "pages/LandingPages/Products";
import ContactUs from "pages/LandingPages/ContactUs";

const routes = [
  {
    name: "Industry Solutions",
    icon: <RoomPreferencesIcon />,
    collapse: [
      {
        name: "Automotive Aftermarket",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Auto Glass Replacement",
            // route: "/sections/page-sections/page-headers",
            // component: <PageHeaders />,
          },
          {
            name: "Panel Bonding",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
          {
            name: "Sealing",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
          {
            name: "Plastic Repair",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
          {
            name: "Protective Coatings",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
        ],
      },
      {
        name: "Transportation",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Vehicle Assembly Bonding",
            // route: "/sections/navigation/navbars",
            // component: <Navbars />,
          },
          {
            name: "Glass and Windshield Adhesive",
            // route: "/sections/navigation/nav-tabs",
            // component: <NavTabs />,
          },
          {
            name: "Metal Adhesives and Epoxies",
            // route: "/sections/navigation/pagination",
            // component: <Pagination />,
          },
          {
            name: "Sandwich Panel Adhesives",
            // route: "/sections/navigation/pagination",
            // component: <Pagination />,
          },
        ],
      },
      {
        name: "Marine",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Leisure Boats and Yachts",
            // route: "/sections/input-areas/inputs",
            // component: <Inputs />,
          },
          {
            name: "Shipbuilding and Offshore",
            // route: "/sections/input-areas/forms",
            // component: <Forms />,
          },
        ],
      },
      {
        name: "Buildings Components",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Facade",
            // route: "/sections/attention-catchers/alerts",
            // component: <Alerts />,
          },
          {
            name: "Windows",
            // route: "/sections/attention-catchers/modals",
            // component: <Modals />,
          },
          {
            name: "Doors",
            // route: "/sections/attention-catchers/tooltips-popovers",
            // component: <TooltipsPopovers />,
          },
          {
            name: "Flooring Elements",
            // route: "/sections/attention-catchers/tooltips-popovers",
            // component: <TooltipsPopovers />,
          },
          {
            name: "Building Elements",
            // route: "/sections/attention-catchers/tooltips-popovers",
            // component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "elements",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            // route: "/sections/elements/avatars",
            // component: <Avatars />,
          },
          {
            name: "badges",
            // route: "/sections/elements/badges",
            // component: <Badges />,
          },
          {
            name: "breadcrumbs",
            // route: "/sections/elements/breadcrumbs",
            // component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            // route: "/sections/elements/buttons",
            // component: <Buttons />,
          },
          {
            name: "dropdowns",
            // route: "/sections/elements/dropdowns",
            // component: <Dropdowns />,
          },
          {
            name: "progress bars",
            // route: "/sections/elements/progress-bars",
            // component: <ProgressBars />,
          },
          {
            name: "toggles",
            // route: "/sections/elements/toggles",
            // component: <Toggles />,
          },
          {
            name: "typography",
            // route: "/sections/elements/typography",
            // component: <Typography />,
          },
        ],
      },
    ],
  },
  // {
  //   name: "Home",
  //   route: "layouts/pages/presentation",
  //   component: <PresentationPage />,
  // },

  {
    name: "Construction Solutions",
    icon: <BuildIcon />,
    collapse: [
      {
        name: "Refurbishment",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Grouting",
            // route: "/sections/page-sections/page-headers",
            // component: <PageHeaders />,
          },
          {
            name: "Anchoring",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
          {
            name: "Structural Strengthening",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
          {
            name: "Concrete Repair",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
          {
            name: "Concrete Protection",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
          {
            name: "Tiling System",
            // route: "/sections/page-sections/features",
            // component: <Features />,
          },
        ],
      },
      {
        name: "Concrete",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Concrete Admixture",
            // route: "/sections/navigation/navbars",
            // component: <Navbars />,
          },
          {
            name: "Additives for Dry Mortar & Gypsum",
            // route: "/sections/navigation/nav-tabs",
            // component: <NavTabs />,
          },
          {
            name: "Cement Additives",
            // route: "/sections/navigation/pagination",
            // component: <Pagination />,
          },
        ],
      },
      {
        name: "Waterproofing",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Liquid Applied Waterproofing",
            // route: "/sections/input-areas/inputs",
            // component: <Inputs />,
          },
          {
            name: "Injection",
            // route: "/sections/input-areas/forms",
            // component: <Forms />,
          },
          {
            name: "Joint Waterproofing",
            // route: "/sections/input-areas/forms",
            // component: <Forms />,
          },
          {
            name: "Sheet Membrane",
            // route: "/sections/input-areas/forms",
            // component: <Forms />,
          },
          {
            name: "Waterproofing Mortar",
            // route: "/sections/input-areas/forms",
            // component: <Forms />,
          },
          {
            name: "Bituminous Sheet Membrane",
            // route: "/sections/input-areas/forms",
            // component: <Forms />,
          },
        ],
      },
      {
        name: "Roofing",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Single Ply Roof Membrane",
            // route: "/sections/attention-catchers/alerts",
            // component: <Alerts />,
          },
          {
            name: "Liquid Applied Membrane",
            // route: "/sections/attention-catchers/modals",
            // component: <Modals />,
          },
          {
            name: "Bituminous Membrane",
            // route: "/sections/attention-catchers/tooltips-popovers",
            // component: <TooltipsPopovers />,
          },
          {
            name: "Roof Repair",
            // route: "/sections/attention-catchers/tooltips-popovers",
            // component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "Flooring",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Industrial Coating",
            // route: "/sections/elements/avatars",
            // component: <Avatars />,
          },
          {
            name: "Floor Joint",
            // route: "/sections/elements/badges",
            // component: <Badges />,
          },
          {
            name: "Car Park & Traffic Coating",
            // route: "/sections/elements/breadcrumbs",
            // component: <BreadcrumbsEl />,
          },
          {
            name: "Decorative Floor Coating",
            // route: "/sections/elements/buttons",
            // component: <Buttons />,
          },
          {
            name: "Concrete Flooring",
            // route: "/sections/elements/dropdowns",
            // component: <Dropdowns />,
          },
        ],
      },
      {
        name: "Sealing & Bonding",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Construction Adhesives",
            // route: "/sections/elements/avatars",
            // component: <Avatars />,
          },
          {
            name: "Expansion Foam",
            // route: "/sections/elements/badges",
            // component: <Badges />,
          },
          {
            name: "Floor Joint Sealant",
            // route: "/sections/elements/breadcrumbs",
            // component: <BreadcrumbsEl />,
          },
          {
            name: "Building Envelope Solutions",
            // route: "/sections/elements/buttons",
            // component: <Buttons />,
          },
          {
            name: "Firestop System",
            // route: "/sections/elements/dropdowns",
            // component: <Dropdowns />,
          },
        ],
      },
      {
        name: "Wall & Facade System",
        description: "Discover more",
        dropdown: true,
        collapse: [
          {
            name: "Hygienic Wall Coating",
            // route: "/sections/elements/avatars",
            // component: <Avatars />,
          },
          {
            name: "Interior Wall Coating",
            // route: "/sections/elements/badges",
            // component: <Badges />,
          },
          {
            name: "Facade Mortars & Protection",
            // route: "/sections/elements/breadcrumbs",
            // component: <BreadcrumbsEl />,
          },
        ],
      },
    ],
  },
  // {
  //   name: "docs",
  //   icon: <Icon>article</Icon>,
  //   collapse: [
  //     {
  //       name: "getting started",
  //       description: "All about overview, quick start, license and contents",
  //       href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
  //     },
  //     {
  //       name: "foundation",
  //       description: "See our colors, icons and typography",
  //       href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
  //     },
  //     {
  //       name: "components",
  //       description: "Explore our collection of fully designed components",
  //       href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
  //     },
  //     {
  //       name: "plugins",
  //       description: "Check how you can integrate our plugins",
  //       href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
  //     },
  //   ],
  // },
  {
    name: "About us",
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },
  // {
  //   name: "Author",
  //   route: "/pages/landing-pages/author",
  //   component: <Author />,
  // },
  // {
  //   name: "Products",
  //   route: "/pages/landing-pages/products",
  //   component: <Products />,
  // },
  {
    name: "Contact us",
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
  // {
  //   name: "github",
  //   icon: <GitHubIcon />,
  //   href: "https://www.github.com/creativetimofficial/material-kit-react",
  // },
];

export default routes;
