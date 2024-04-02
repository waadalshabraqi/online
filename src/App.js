import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/Components/pages/HomePage";
import ProductPage from "../src/Components/pages/ProductPage";
import ProductManagementPage from "../src/Components/pages/ProductManagementPage";
import productsData from "./data/products.json";
import MyNavbar from "./Components/inc/MyNavbar";

function App() {
  const [data, setData] = useState(productsData);

  return (
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
        <Route index element={<HomePage data={data} />} />
        <Route
          path="product/:productId"
          element={<ProductPage data={data} />}
        />
        <Route
          path="product-management"
          element={<ProductManagementPage data={data} setData={setData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
