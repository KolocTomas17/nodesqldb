import { Route } from "react-router";
import img from "./image/Snímek obrazovky 2023-05-21 093356.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="http://localhost:3001">
          <img
            src={img}
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width={112}
            height={28}
          />
        </a>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="content" className="navbar-item">Produkty</Link>
            <a className="navbar-item">Kontakty</a>
          </div>
        </div>
      </div>
      <div className="navbar-brand navbar-end">
        <div className="navbar-item">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Search" />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
        </div>
        <a className="navbar-item">Košík</a>
      </div>
    </nav>
  );
};

export default Header;
