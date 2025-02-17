import React, { useState } from "react";
import HomePage from "./pages/HomePage.js";
import ShopPage from "./pages/ShopPage.js";
import ProductPage from "./pages/ProductPage.js";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <HomePage navigateToShop={() => setPage("shop")} />}
      {page === "shop" && <ShopPage navigateToProduct={() => setPage("product")} />}
      {page === "product" && <ProductPage />}
    </div>
  );
}