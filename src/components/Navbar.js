import React from "react";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks.js";
import SocialLink from "./SocialLink.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link, index) => {
            return (
              <li key={link.id}>
                <a href={pageLinks[index].href} className="nav-link">
                  {pageLinks[index].text}
                </a>
              </li>
            );
          })}
        </ul> */}
        <SocialLink parentClass='nav-links' itemClass='nav-link'/>
        {/* <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
