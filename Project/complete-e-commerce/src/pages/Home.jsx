// src/pages/Home.js

import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our E-commerce Store</h1>
      <Carousel />
      <h2>Featured Products</h2>
      <div className="product-gallery">
        <img src="https://via.placeholder.com/200" alt="Product 1" />
        <img src="https://via.placeholder.com/200" alt="Product 2" />
        <img src="https://via.placeholder.com/200" alt="Product 3" />
      </div>
    </div>
  );
};

export default Home;
