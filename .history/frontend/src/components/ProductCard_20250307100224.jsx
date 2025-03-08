import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
        {/* Product content */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover" // Set height to 48 and apply object-cover
        />
      </div>
    </>
  );
};

export default ProductCard;
