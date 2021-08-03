import React from "react";

function Header(props) {
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-sm py-3">
      <div className="container">
        <a className="navbar-brand">Frontend Bootcamp</a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link">Learn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
