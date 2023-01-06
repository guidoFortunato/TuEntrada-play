import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="img-container">
          <Link className="navbar-brand nav-link" to="/">
            <img
              src="https://eventos.tuentrada.com/light_custom/lightTheme/logo_tue_secutix.png"
              alt="logo tuentrada"
              className="img-fluid"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" href="#">
              Home
            </Link>
            <Link className="nav-link" href="#">
              Features
            </Link>
            <Link className="nav-link" href="#">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
