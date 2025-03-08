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

        <div className="p-4">
          <h1 className="text-md mb-2">{product.name}</h1>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
