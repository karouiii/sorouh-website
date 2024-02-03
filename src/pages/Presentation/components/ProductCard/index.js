import PropTypes from "prop-types";
import React from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ProductCard({ image, name, description }) {
  const imageTemplate = (
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
      <MKBox component="img" src={image} alt={name} desc={description} width="100%" my="auto" />
    </MKBox>
  );

  return (
    <MKBox position="relative">
      {imageTemplate}

      <MKBox mt={1} ml={1} lineHeight={1}>
        {name && (
          <MKTypography variant="h6" fontWeight="bold">
            {name}
          </MKTypography>
        )}
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the ProductCard
ProductCard.defaultProps = {
  name: "",
  description: "",
};

// Typechecking props for the ProductCard
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ProductCard;
