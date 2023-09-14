import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark text-white">
      <div className="container-fluid" id="navbar">
        <a className="navbar-brand text-white p-10" href="#">
          Landing Page
        </a>
      </div>
      <div
        className="collapse navbar-collapse navbar-nav mr-5 ms-auto mb-2 mb-lg-0"
        id="navbarText"
      >
        <a className="nav-link text-white" href="#">
          Home{" "}
        </a>
        <a className="nav-link text-white" href="#">
          About
        </a>
        <a className="nav-link text-white" href="#">
          Services
        </a>
        <a className="nav-link text-white" href="#">
          Contact
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
