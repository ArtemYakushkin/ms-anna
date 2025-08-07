import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div className={`menu-wrapp ${isOpen ? "open" : ""}`} isOpen={isOpen}>
      <Link className="menu-item" to={"/"} onClick={closeMenu}>
        Головна
      </Link>

      <Link className="menu-item" to={"/about"} onClick={closeMenu}>
        Про мене
      </Link>

      <Link className="menu-item" to={"/blog"} onClick={closeMenu}>
        Блог
      </Link>
    </div>
  );
};

export default MobileMenu;
