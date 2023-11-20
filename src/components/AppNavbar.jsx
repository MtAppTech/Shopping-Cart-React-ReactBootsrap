import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className=" "
      style={{ background: "#758280", paddingLeft: "15px" }}
    >
      <Navbar.Brand className="text-white">
        Shopping Cart
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/newProduct">
            New Product
          </NavLink>
          <NavLink className="nav-link" to="/productList">
            Product List
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
