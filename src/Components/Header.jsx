import React, { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(true);

  const handleMenuClick = () => {
    setIsActive(false);
  };
  const handleCrossClick = () => {
    setIsActive(true);
  };
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="/" className="logo">
          Disenthrall
        </a>

        <nav className="navbar hide-navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            <li>
              <a href="#service" className="navbar-link" data-nav-link>
                Services
              </a>
            </li>

            <li>
              <a href="#project" className="navbar-link" data-nav-link>
                Project
              </a>
            </li>

            <li>
              <a href="#about" className="navbar-link" data-nav-link>
                About Us
              </a>
            </li>

            <li>
              <a href="#contact" className="navbar-link" data-nav-link>
                Contact Us
              </a>
            </li>

            <li>
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          data-nav-toggler
        >
          {isActive ? (
            <ion-icon
              name="menu-outline"
              className="open"
              onClick={handleMenuClick}
            ></ion-icon>
          ) : (
            <ion-icon
              name="close-outline"
              className="close"
              onClick={handleCrossClick}
            ></ion-icon>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
