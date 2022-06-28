import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizzeria</NavLink>
        <NavIcon onClick={toggle}>
          <p style={{ fontSize: "40px" }}>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
