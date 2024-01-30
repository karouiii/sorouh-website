import PropTypes from "prop-types";
import React, { useState } from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ProductCard({ image, name, description }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const imageTemplate = (
    <MKBox
      onClick={handleCardClick}
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

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={closePopup}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "400px",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
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
