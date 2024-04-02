import React from "react";
import { useParams } from "react-router-dom";
import '../styles/ProductPage.css'

function ProductPage({ data }) {
  const { productId } = useParams();

  const product = data.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="card-container">Product not found</div>;
  }

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <div className="note-card">
        <img
          className="card-img-top"
          src={product.image_url}
          alt={product.name}
        />
        <div className="card-body">
          
          <p className="card-desc">{product.description}</p>
          <p className="card-price">
            Price: {product.price} {product.currency}
          </p>
          <p className="card-text">Stock: {product.stock}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

