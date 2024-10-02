// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import '../ProductList/ProductList.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} />
      <h3>{product.name}</h3>
      <Link to={`/products/${product.id}`}>View in 3D</Link>
    </div>
  );
};

export default ProductCard;
