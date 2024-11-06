import React from "react";
import "../style/Header.css";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "JOURNALS", href: "/journals" },
  { name: "INSTITUTIONS", href: "/institutions" },
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
            {navLinks.map((nav) => (
              <a href={nav.href} key={nav.href} className="navLink">
                {nav.name}
              </a>
            ))}
          </nav>
          <div style={{ gap: "10px", display: "flex" }}>
            <a href="/login" className="uploadButton">
              LOGIN
            </a>
            <a href="/signup" className="uploadButton">
              REGISTER
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
