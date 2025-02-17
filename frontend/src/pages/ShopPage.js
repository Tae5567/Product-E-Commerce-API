import React from "react";
import "../styles/ShopPage.css";

const ShopPage = ({ navigateToProduct }) => {
  const products = [
    { id: 1, name: "Anok Pump 105", image: "/product1.jpg" },
    { id: 2, name: "Anok Pump 105", image: "/product2.jpg" },
    { id: 3, name: "Anok Mule 105", image: "/product3.jpg" },
    { id: 4, name: "Tilda Loafer", image: "/product4.jpg" },
  ];

  return (
    <div className="shop-page">
      <nav className="navbar">
        <h1 className="brand">Eyitayo</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>Search</li>
          <li>Cart (0)</li>
        </ul>
      </nav>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item" onClick={navigateToProduct}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;