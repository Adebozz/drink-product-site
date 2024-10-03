// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ThreeScene from "../components/ThreeScene";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <ThreeScene texturePath={product.texture} />
    </div>
  );
};

export default ProductDetail;
