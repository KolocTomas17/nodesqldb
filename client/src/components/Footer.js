import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <strong className="white">Nakama Books</strong>
        <p>
          Tomáš Koloc
          <Link to="https://instagram.com" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </Link>
          <Link to="https://facebook.com" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </Link>
          | Tomáš Sucharda
          <Link to="https://instagram.com" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </Link>
          <Link to="https://facebook.com" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </Link>
          | Tomáš Pelc
          <Link to="https://instagram.com" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </Link>
          <Link to="https://facebook.com" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
