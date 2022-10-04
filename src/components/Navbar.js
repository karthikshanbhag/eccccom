import React from "react";
import bootstrap from "/node_modules/bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <a className="navbar-brand" href="#">
        SHOPPE
      </a>
      

      <div className="collapse navbar-collapse ml-auto" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
