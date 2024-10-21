import React from "react";
import iconoir from "../assets/img/iconoir-facebook.svg";
import devicon from "../assets/img/devicon-twitter.svg";
import line2 from "../assets/img/line2.svg";
import line3 from "../assets/img/line3.svg";
import epback from "../assets/img/epback.png";
import hugeicons from "../assets/img/hugeicons-instagram.svg";
import { Link } from "react-router-dom";
import "../style/Footer.css";

function Footer() {
  return (
    <div className="FOOTER">
      <footer className="footer">
        <div className="overlap-group">
          {/* Resources Section */}
          <div className="frame">
            <div className="text-wrapper">Resources</div>
            <div className="frame-2">
              <Link to="/institutions" className="text-wrapper-2">
                Institutions
              </Link>
              <Link to="/research" className="text-wrapper-3">
                Research
              </Link>
              <Link to="/terms" className="text-wrapper-3">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="frame-3">
            <div className="text-wrapper">Support</div>
            <div className="frame-2">
              <Link to="/guidelines" className="text-wrapper-4">
                Guidelines
              </Link>
              <Link to="/help" className="text-wrapper-3">
                Help Center
              </Link>
              <Link to="/privacy" className="text-wrapper-3">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="frame-4">
            <div className="text-wrapper">Company</div>
            <div className="frame-2">
              <Link to="/about" className="text-wrapper-2">
                About Us
              </Link>
              <Link to="/journals" className="text-wrapper-3">
                Journals
              </Link>
              <Link to="/updates" className="text-wrapper-3">
                Latest Updates
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="text-wrapper-5">Newsletter</div>
          <p className="p">
            Enter your email address and get updates directly to your email
          </p>
          <div className="text-wrapper-6">Get Monthly Updates</div>

          {/* Lines and Graphics */}
          <img className="line" alt="Line" src={line2} />
          <img className="img" alt="Line" src={line3} />
          <img className="ep-back" alt="Ep back" src={epback} />

          {/* Social Media Section */}
          <div className="group">
            <div className="text-wrapper-7" style={{ color: "wheat" }}>
              Follow Us On
            </div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="iconoir-facebook" alt="Facebook" src={iconoir} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hugeicons-instagram"
                alt="Instagram"
                src={hugeicons}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="devicon-twitter" alt="Twitter" src={devicon} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
