import React from 'react';
import "./style.css"

const poster = () => {
  return (
    <div>
      <div class="poster">
        <h1>Raining Offers For</h1>
        <h2>Hot Summer!</h2>
        <p>25% Off On All Products</p>

        <div class="buttons">
          <button class="product" data-category="EVERYTHING">
            {" "}
            <a href="#shop">SHOP NOW</a>
          </button>
          <button class="product" data-category="accessories">
            FIND MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default poster
