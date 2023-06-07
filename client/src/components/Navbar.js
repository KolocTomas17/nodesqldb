import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // zobrazi burger
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="navbar py-4 is-fixed-top">
      <ul className={active}>
        <div className="navbar-item">
          <Link to="/">
            <ul className="navbar-item">
              <FontAwesomeIcon icon={faHouse} style={{ color: "#43485C" }} />
            </ul>
          </Link>
        </div>

        <div className="navbar-start">
          <ul className="navbar-item ">
            <Link to="content" className="navbar-item">
              Produkty
            </Link>
          </ul>
          <ul className="navbar-item">
            <Link to="kontakty" className="navbar-item">
              Kontakty
            </Link>
          </ul>
          <ul className="navbar-item">
            <Link to="kosik" className="navbar-item">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#43485C" }}
              />
            </Link>
          </ul>




        </div>
        
      </ul>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="navbar-end search">
          <ul className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="nazev" />
              </div>
              <div className="control">
                <a className="button aaa">Hledat</a>
              </div>
            </div>
          </ul>
          </div>

    </nav>
  );
}

export default Navbar;
