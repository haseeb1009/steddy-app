import { Link } from "react-router-dom";
import signal from "../../signal.svg";

import "./Footer.scss";

function Footer() {
  return (
    <div className="root">
      <img className='mobile-image' src={signal} alt="Signal" />

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
