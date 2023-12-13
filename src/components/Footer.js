import React from "react";
import Logo from "../assets/Logo.svg";
import "../css/Footer.css"

export default function Footer () {
    return (
        <footer>
            <div className="footer-content">
                <img src={Logo} alt="The B-OND logo"/>
                <p>B-OND est. 2021</p>
                <a href="mailto:bondkdance@gmail.com">bondkdance@gmail.com</a>
            </div>
        </footer>
    )
};