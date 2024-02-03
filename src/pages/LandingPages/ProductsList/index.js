import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKPagination from "components/MKPagination";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
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
} from "@mui/material";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//Images
import bgImage from "assets/images/bg-products.jpg";

import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/categories");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      <MKBox component="img" src={process.env.PUBLIC_URL + item.image} width="100%" my="auto" />
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
                  <ToggleButton key={category.id} value={category.name}>
                    {category.name}
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
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: "16px" }}
              />
              {/* Products display */}
              <Grid container spacing={2}>
                {filteredProducts.map((category) => (
                  <React.Fragment key={category.id}>
                    <Grid item xs={12}>
                      <Typography variant="h5" style={{ marginBottom: "8px" }}>
                        {category.name}
                      </Typography>
                      <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
                    </Grid>
                    {category.items.map((item) => (
                      <Grid key={item.name} item xs={12} sm={6} md={4} lg={3}>
                        <MKBox position="relative">
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
                    {category.id < filteredProducts.length - 1 && (
                      <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
                    )}{" "}
                    {/* Add divider if not the last category */}
                  </React.Fragment>
                ))}
              </Grid>
              <Divider sx={{ borderColor: "#191919", borderWidth: 2, margin: "8px 0" }} />
              <Container sx={{ height: "100%" }}>
                <Grid container item justifyContent="center" xs={12} lg={6} mx="auto" height="100%">
                  <MKPagination>
                    <MKPagination item>
                      <Icon>keyboard_arrow_left</Icon>
                    </MKPagination>
                    <MKPagination item active>
                      1
                    </MKPagination>
                    <MKPagination item>2</MKPagination>
                    <MKPagination item>3</MKPagination>
                    <MKPagination item>4</MKPagination>
                    <MKPagination item>5</MKPagination>
                    <MKPagination item>
                      <Icon>keyboard_arrow_right</Icon>
                    </MKPagination>
                  </MKPagination>
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
