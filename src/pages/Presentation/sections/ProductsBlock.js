// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Divider,
} from "@mui/material";

// import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
// import MKTypography from "components/MKTypography";

// Presentation page components
import ProductCard from "../components/ProductCard";

// Data
import data from "pages/Presentation/sections/data/productsData";

const ProductsBlock = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = data.reduce((acc, category) => {
    const filteredItems = category.items.filter(
      (item) =>
        (!categoryFilter || category.category === categoryFilter) &&
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
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
          <Typography variant="h6">Filter by Category</Typography>
          <ToggleButtonGroup
            color="info"
            fullWidth={true}
            orientation="vertical"
            value={categoryFilter}
            exclusive
            onChange={handleCategoryChange}
          >
            {data.map((category) => (
              <ToggleButton key={category.category} value={category.category}>
                {category.category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={9}>
        <Paper elevation={3} style={{ padding: "16px", marginBottom: "16px" }}>
          <TextField
            label="Search by Name"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ marginBottom: "16px" }}
          />

          <Grid container spacing={2}>
            {filteredProducts.map((category, index) => (
              <React.Fragment key={category.category}>
                <Grid item xs={12}>
                  <Typography variant="h5" style={{ marginBottom: "8px" }}>
                    {category.category}
                  </Typography>
                  <Divider sx={{ borderColor: "#007bff", borderWidth: 2, margin: "8px 0" }} />
                </Grid>
                {category.items.map((item) => (
                  <Grid key={item.name} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard {...item} />
                  </Grid>
                ))}
                {index < filteredProducts.length - 1 && (
                  <Divider sx={{ borderColor: "#007bff", borderWidth: 2, margin: "8px 0" }} />
                )}{" "}
                {/* Add divider if not the last category */}
              </React.Fragment>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

// const renderData = data.map(({ category, items }) => (
// <Grid container spacing={3} sx={{ mb: 10 }} key={category}>
//   <Grid item xs={12} lg={3}>
//     <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
//       <MKTypography variant="h3" fontWeight="bold" mb={1}>
//         {category}
//       </MKTypography>
//     </MKBox>
//   </Grid>
//   <Grid item xs={12} lg={9}>
//     <Grid container spacing={3}>
//       {items.map(({ image, description, name }) => (
//         <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
//           <ProductCard image={image} name={name} description={description} />
//         </Grid>
//       ))}
//     </Grid>
//   </Grid>
// </Grid>
// ));

// return (
//   <MKBox component="section" my={6} py={6}>
//     <Container>
//       <Grid
//         container
//         item
//         xs={12}
//         lg={6}
//         flexDirection="column"
//         alignItems="center"
//         sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
//       >
//         <MKTypography variant="h2" fontWeight="bold">
//           Huge collection of products
//         </MKTypography>
//         <MKTypography variant="body1" color="text">
//           We have created multiple options for you to put together and customise into pixel
//           perfect pages.
//         </MKTypography>
//       </Grid>
//     </Container>
//     <Container sx={{ mt: 6 }}>{renderData}</Container>
//   </MKBox>
// );

export default ProductsBlock;
