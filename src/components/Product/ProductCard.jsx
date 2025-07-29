import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">${product.price}</p>
      <button className="bg-[#111827] hover:bg-[#111827]/90 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
