import React from "react";
// import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import ProductCard from "../../components/Product/ProductCard";

function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      price: 100,
      image: "image1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      price: 200,
      image: "image2.jpg",
    },
  ];

  return (
    <div className="flex container mx-auto p-4" >
      <h1 >Home</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
