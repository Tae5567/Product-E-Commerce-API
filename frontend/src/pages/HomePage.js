import React from "react";
import "../styles/HomePage.css";

const HomePage = ({ navigateToShop }) => {
    return (
      <div className="homepage">
        <nav className="navbar">
          <h1 className="brand">Eyitayo</h1>
          <ul className="nav-links">
            <li>Home</li>
            <li onClick={navigateToShop}>Shop</li>
            <li>Contact</li>
            <li>Search</li>
            <li>Cart (0)</li>
          </ul>
        </nav>
        <section className="hero">
          <img src="/hero-image.jpg" alt="Luxury Heels" className="hero-image" />
          <button className="shop-now" onClick={navigateToShop}>Shop Now</button>
        </section>
      </div>
    );
  };
  
  export default HomePage;