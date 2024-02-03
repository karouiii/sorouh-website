import React from "react";
// import MKBox from "components/MKBox";
import PropTypes from "prop-types";

function ProductPopup({ selectedProduct, onClose }) {
  return (
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
      onClick={onClose}
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
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

ProductPopup.propTypes = {
  selectedProduct: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProductPopup;
