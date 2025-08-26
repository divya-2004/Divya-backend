import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';

function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
     { name: "Register", path: "/add" },
    { name: "Players", path: "/players" }
  ];

  return (
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container">
        <Link className="navbar-brand text-warning fw-bold" to="/">Cricket Hub</Link>
        <ul className="navbar-nav ms-auto">
          {navItems.map((item) => (
            <li className="nav-item" key={item.path}>
              <Link
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
