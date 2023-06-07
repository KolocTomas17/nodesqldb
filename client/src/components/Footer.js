import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <strong className="white">Nakama Books</strong>
        <p>
          Tomáš Koloc
          <a href="https://www.instagram.com/tomakyys/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </a>
          <a href="https://www.facebook.com/tomas.koloc.9" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </a>
          | Tomáš Sucharda
          <a href="https://www.instagram.com/tomassucharda13/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </a>
          <a href="https://www.facebook.com/tomas.sucharda.568" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </a>
          | Tomáš Pelc
          <a href="https://www.instagram.com/ten.zrzek/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </a>
          <a href="https://www.facebook.com/tomas.pelc.99" target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              beat
              style={{ color: "#cfcfcf" }}
            />
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
