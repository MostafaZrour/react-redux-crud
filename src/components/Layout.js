import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand bg-primary">
        <div className="container justify-content-center">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/pizza">
                Pizza
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
