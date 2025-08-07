import { useState } from "react";
import { Link } from "react-router-dom";

import MobileMenu from "./MobileMenu";

import Logo from "../assets/Logo2.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapp">
          <Link to={"/"}>
            <img className="header-logo" src={Logo} alt="logo" />
          </Link>

          <ul className="header-list">
            <li className="header-item">
              <Link to={"/"}>Головна</Link>
            </li>
            <li className="header-item">
              <Link to={"/about"}>Про мене</Link>
            </li>
            <li className="header-item">
              <Link to={"/blog"}>Блог</Link>
            </li>
          </ul>

          <button className="header-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`header-burger ${menuOpen ? "open" : ""}`} isOpen={menuOpen}></div>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;
