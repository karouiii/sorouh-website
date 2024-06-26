import Card from "@mui/material/Card";
import MKAvatar from "components/MKAvatar";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
// import MKPagination from "components/MKPagination";
// import Icon from "@mui/material/Icon";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {
  Grid,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Modal,
  Box,
  Typography,
} from "@mui/material";

import ScrollTopButton from "./ScrollTopButton";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//Images
import bgImage from "assets/images/bg-products.jpg";

import React, { useState } from "react";
// import axios from "axios";

//data
import data from "pages/Presentation/sections/data/productsData";
import MKTypography from "components/MKTypography";
// import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #a37913",
  borderRadius: "1.25rem",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 768px)": {
    width: 300, // Changez cette valeur en fonction de votre besoin
  },
  "@media (min-width: 769px) and (max-width: 1024px)": {
    width: 400, // Changez cette valeur en fonction de votre besoin
  },
  "@media (min-width: 1025px)": {
    width: 700, // Changez cette valeur en fonction de votre besoin
  },
};

// const styleProduct = {
//   border: "2px solid #a37913",
//   borderRadius: "1.25rem",
// };

const ProductList = () => {
  //  POP-UP
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClose = () => setOpen(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  // FILTER AND SEARCH
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = data.reduce((acc, category) => {
    const filteredItems = category.items.filter(
      (item) =>
        (!categoryFilter || category.name === categoryFilter) &&
        (!searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    if (filteredItems.length > 0) {
      acc.push({
        ...category,
        items: filteredItems,
      });
    }
    return acc;
  }, []);

  const handleCategoryChange = (_, newCategory) => {
    setCategoryFilter(newCategory);
    console.log(newCategory);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 4;
  const totalCategories = filteredProducts.length;
  const lastCategoryIndex = currentPage * categoriesPerPage;
  const firstCategoryIndex = lastCategoryIndex - categoriesPerPage;
  const currentCategories = filteredProducts.slice(firstCategoryIndex, lastCategoryIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    const element = document.getElementById("productsBlock");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // PRODUCT IMAGE TEMPLATE
  const imageTemplate = (item) => (
    <MKBox
      bgColor="white"
      shadow="lg"
      minHeight="10rem"
      sx={{
        border: "2px solid #a37913",
        borderRadius: "1.25rem",
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
    >
      <MKBox component="img" src={item.image} width="100%" my="auto" />
    </MKBox>
  );

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* Products block */}
        <Grid container spacing={3} id={"productsBlock"}>
          {/* Filter by category */}
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
              <MKTypography variant="h6" sx={{ color: "#a37913" }}>
                Filter by Category
              </MKTypography>
              <ToggleButtonGroup
                color="warning"
                fullWidth={true}
                orientation="vertical"
                value={categoryFilter}
                exclusive
                onChange={handleCategoryChange}
              >
                {data.map((category) => (
                  <ToggleButton key={category.id} value={category.name}>
                    <MKTypography
                      variant="caption"
                      color="black"
                      fontWeight="normal"
                      mb={1}
                      pr={2}
                      sx={{ textAlign: "center" }}
                    >
                      {category.name}
                    </MKTypography>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
              {/* Search filter */}
              <TextField
                label="Search by Name"
                type="search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: "16px" }}
              />
              {/* Products display */}
              <Grid container spacing={2}>
                {currentCategories.map((category) => (
                  <React.Fragment key={category.category}>
                    <Grid item xs={12}>
                      <MKTypography variant="h5" style={{ marginBottom: "8px" }}>
                        {category.name}
                      </MKTypography>
                      <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
                    </Grid>
                    {category.items.map((item) => (
                      <Grid key={item.name} item xs={12} sm={6} md={4} lg={3}>
                        <MKBox position="relative" onClick={() => handleItemClick(item)}>
                          {imageTemplate(item)}
                          <MKBox mt={1} ml={1} lineHeight={1}>
                            {item.name && (
                              <MKTypography variant="h6" fontWeight="bold">
                                {item.name}
                              </MKTypography>
                            )}
                          </MKBox>
                        </MKBox>
                      </Grid>
                    ))}
                    {category.id < currentCategories.length - 1 && (
                      <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
                    )}{" "}
                    {/* Add divider if not the last category */}
                  </React.Fragment>
                ))}

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styleModal}>
                    <MKBox display="flex" justifyContent="space-between" alignItems="center">
                      <MKTypography color="gold" id="modal-modal-title" variant="h4" component="h2">
                        {selectedItem && selectedItem.name}
                      </MKTypography>
                      {selectedItem && selectedItem.image && (
                        <MKAvatar
                          src={selectedItem.image}
                          alt={selectedItem.name}
                          variant="rounded"
                          size="lg"
                          shadow="md"
                        />
                      )}
                    </MKBox>
                    <Typography id="modal-modal-description" textAlign={"justify"} sx={{ mt: 2 }}>
                      {selectedItem && selectedItem.description}
                    </Typography>
                    {selectedItem && selectedItem.moreDescription && (
                      <>
                        <Typography variant="h4" sx={{ mt: 2 }}>
                          More details :
                        </Typography>
                        {selectedItem &&
                          selectedItem.moreDescription.map((detail, index) => (
                            <Typography
                              key={index}
                              variant="h6"
                              sx={{ mt: 1, display: "flex", alignItems: "center" }}
                            >
                              <AddIcon fontSize="small" color="gold" sx={{ mr: 1 }} />
                              {detail.detail}
                            </Typography>
                          ))}
                      </>
                    )}
                  </Box>
                </Modal>
              </Grid>
              <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />

              <Container sx={{ height: "100%" }}>
                <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
                  <Stack spacing={2} sx={{ justifyContent: "center", marginTop: 2 }}>
                    <Pagination
                      count={Math.ceil(totalCategories / categoriesPerPage)}
                      page={currentPage}
                      onChange={handlePageChange}
                      color="warning"
                    />
                  </Stack>
                </Grid>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Card>
      <ScrollTopButton />

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default ProductList;
