import React from 'react';
import "./style.css";

const nav = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">Paarsh Infotech</div>
        <div class="nav-links">
          <a href="www.google.com" class="nav-link" data-category="all">
            EVERYTHING
          </a>
          <a href="www.google.com" class="nav-link" data-category="women">
            WOMEN
          </a>
          <a href="www.google.com" class="nav-link" data-category="men">
            MEN
          </a>
          <a href="www.google.com" class="nav-link" data-category="accessories">
            ACCESSORIES
          </a>
        </div>
        <div class="actions">
          <a href="www.google.com">ABOUT</a>
          <a href="www.google.com">CONTACT US</a>
          <div class="cart">
            <a href="www.google.com">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </div>
          <a href="www.google.com">
            <i class="fas fa-user"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default nav
