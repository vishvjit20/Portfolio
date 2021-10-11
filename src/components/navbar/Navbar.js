import { links } from "../../data";
import React, { useState } from "react";
import NavbarList from "./NavbarList";
import "./navbar.scss";
const Navbar = ({ menuOpen, setMenuOpen, id, stateChange }) => {
  const [selected, setSelected] = useState();
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Vishwajeet
          </a>
        </div>

        <div className="right">
          {links.map((link, idx) => (
            <NavbarList
              key={idx}
              link={link}
              active={selected === idx}
              id={idx}
              setSelected={setSelected}
            />
          ))}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
