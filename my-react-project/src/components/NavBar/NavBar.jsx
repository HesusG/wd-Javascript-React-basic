/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import unicornio from "./logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    // eslint-disable-next-line react/style-prop-object
    <nav id="navBar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Unicorn Travel
        </a>
        <img
          className="imgRock"
          src={unicornio}
          alt="unicornio"
          width="3%"
          height="3%"
        />
          <CartWidget/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Paquetes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Alojamientos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Viajes
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destinos
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Francia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Inglaterra
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Italia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Croacia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Grecia
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Portugal
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
       
      </div>
    </nav>

  );
}
