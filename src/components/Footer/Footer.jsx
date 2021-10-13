import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <div className="root">
      <div className="links-container">
        <a href="/" className="primary">
          ABOUT
        </a>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="links-container">
        <a href="/" className="primary">
          CONNECT
        </a>
        <a href="/"> Instagram </a>
        <a href="/"> LinkedIn </a>
      </div>
    </div>
  );
}

export default Footer;
