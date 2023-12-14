import React from "react";
import { Link } from "react-scroll";
import "../css/Nav.css";

export default function Nav () {
    return (
        <nav>
        <ul>
          <li>
            <Link to="landing" smooth={true} duration={500} >
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} >
              About
            </Link>
          </li>
          <li>
              Talent
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} >
              Contact
            </Link>
          </li>
          <li>
            <a href="https://www.youtube.com/@bond.dancecollective" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </li>
        </ul>
      </nav>
    )
}