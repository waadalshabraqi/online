import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/ProductManagementPage.css'

function ProductManagementPage({ data, setData }) {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [productStock, setProductStock] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: data.length + 1,
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      currency: "USD",
      image_url: productImageUrl,
      stock: parseInt(productStock),
    };

    setData([...data, newProduct]);
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImageUrl("");
    setProductStock("");
    setCurrency("");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Product Management Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3 ">
          <label htmlFor="productName" className="form-label ">
            Product Name:
          </label>
          <input
            type="text"
            className="form-control btn-sub"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Product Description:
          </label>
          <textarea
            className="form-control btn-sub"
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price:
          </label>
          <input
            type="text"
            className="form-control btn-sub"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="currency" className="form-label">
            Currency:
          </label>
          <input
            type="text"
            className="form-control btn-sub"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImageUrl" className="form-label">
            Product Image URL:
          </label>
          <input
            type="text"
            className="form-control btn-sub"
            id="productImageUrl"
            value={productImageUrl}
            onChange={(e) => setProductImageUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productStock" className="form-label">
            Product Stock:
          </label>
          <input
            type="text"
            className="form-control btn-sub"
            id="productStock"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-sub">
          Add Product:
        </button>
      </form>
    </div>
  );
}

export default ProductManagementPage;
