import React from "react";
import "../style/Header.css";

const navLinks = [
  { name: "JOURNALS", href: "/journals" },
  { name: "INSTITUTIONS", href: "/institution" },
  { name: "ABOUT US", href: "/aboutus" },
  { name: "CONTACT US", href: "/contactus" },
];

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <div className="logo">LOGO </div>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <nav className="nav">
            <a href="/" className="navLink1">
              HOME
            </a>
            {navLinks.map((nav) => (
              <a href={nav.href} key={nav.href} className="navLink">
                {nav.name}
              </a>
            ))}
          </nav>
          <div style={{ gap: "10px", display: "flex" }}>
            <a href="/Login" className="uploadButton">
              LOGIN
            </a>
            <a href="/Signup" className="uploadButton">
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
