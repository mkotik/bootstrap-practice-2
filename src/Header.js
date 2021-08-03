import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark text-light ">
      <div className="container">
        <a className="navbar-brand">Frontend Bootcamp</a>

        <button
          className="btn navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse navbar-nav" id="navbar-menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link">Learn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Learn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Learn</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
