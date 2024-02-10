import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import MKBox from "components/MKBox";
// import MKPagination from "components/MKPagination";
import MKTypography from "components/MKTypography";
// import Icon from "@mui/material/Icon";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {
  Grid,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Divider,
  Modal,
  Box,
} from "@mui/material";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//Images
import bgImage from "assets/images/bg-products.jpg";

import React, { useState } from "react";
// import axios from "axios";

//data
import data from "pages/Presentation/sections/data/productsData";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #a37913",
  borderRadius: "1.25rem",
  boxShadow: 24,
  p: 4,
};

const ProductList = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClose = () => setOpen(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

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

  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 4;
  const totalCategories = filteredProducts.length;
  const lastCategoryIndex = currentPage * categoriesPerPage;
  const firstCategoryIndex = lastCategoryIndex - categoriesPerPage;
  const currentCategories = filteredProducts.slice(firstCategoryIndex, lastCategoryIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const imageTemplate = (item) => (
    <MKBox
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      minHeight="10rem"
      sx={{
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
        <Grid container spacing={3}>
          {/* Filter by category */}
          <Grid item xs={12} sm={3}>
            <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
              <MKTypography color="warning" variant="h6">
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
                      variant="text"
                      color="black"
                      fontWeight="bold"
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
                      <Typography variant="h5" style={{ marginBottom: "8px" }}>
                        {category.name}
                      </Typography>
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      {selectedItem && selectedItem.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {selectedItem && selectedItem.description}
                    </Typography>
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

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default ProductList;
