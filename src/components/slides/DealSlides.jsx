import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DealSlides.css";

const DealSlides = () => {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? products.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === products.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slide-container">
      <div className="slideName">
        <h1>Top Deals On Fashion</h1>
      </div>
      <div className="slideShowcontainer">
        {products.slice(currentSlide, currentSlide + 6).map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">
                {item.title.split(" ").slice(0, 3).join(" ")}
              </h3>
              <p className="product-price">Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrevSlide}>
        &#8249;
      </button>
      <button className="next" onClick={handleNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default DealSlides;
