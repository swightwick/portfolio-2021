import React, { Component } from "react";
import logo from "../images/swlogo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content w-100 align-items center">
          <img src={logo} className="nav-logo" alt="Logo" onClick={this.scrollToTop}/>
          <ul className="nav-items m-0 p-0">
            <li className="nav-item">
              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={300}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={300}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={300}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
