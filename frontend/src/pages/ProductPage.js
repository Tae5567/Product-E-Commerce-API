import React from "react";
import "../styles/ProductPage.css";

const ProductPage = () => {
  return (
    <div className="product-page">
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
      <div className="product-container">
        <div className="product-image">
          <img src="/product-image.jpg" alt="Strappy Heels 105" />
        </div>
        <div className="product-details">
          <h2>Strappy Heels 105</h2>
          <p>$350.00</p>
          <button className="add-to-cart">Add to cart</button>
          <p className="product-description">Brief product description goes here</p>
        </div>
      </div>
      <div className="scroll-images">
        <img src="/product-side1.jpg" alt="Side view" />
        <img src="/product-side2.jpg" alt="Top view" />
        <img src="/product-back.jpg" alt="Back view" />
      </div>
      <footer className="footer">
        <h2>Eyitayo</h2>
        <div className="footer-links">
          <div>
            <h3>Socials</h3>
            <p>Instagram</p>
            <p>TikTok</p>
            <p>Pinterest</p>
          </div>
          <div>
            <h3>Resources</h3>
            <p>Return Policy</p>
            <p>Track an Order</p>
            <p>FAQs</p>
          </div>
          <div>
            <h3>About</h3>
            <p>Our Story</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;