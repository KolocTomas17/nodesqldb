import { Route } from "react-router";
import img from "./image/Snímek obrazovky 2023-05-21 093356.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
    <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          <Link to="/" className="navbar-item">  <FontAwesomeIcon icon={faHouse} /> </Link>
            <Link to="content" className="navbar-item">Produkty</Link>
            <Link to="kontakty" className="navbar-item">Kontakty</Link>

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
        <a className="navbar-item"><FontAwesomeIcon icon={faCartShopping} /></a>
      </div>
      
    </nav>

  </>
  );
};



export default Header;