import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKPagination from "components/MKPagination";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Products page sections
import ProductsBlock from "pages/Presentation/sections/ProductsBlock";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

//Images
import bgImage from "assets/images/bg-products.jpg";

function Products() {
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
        <ProductsBlock />
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
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Products;