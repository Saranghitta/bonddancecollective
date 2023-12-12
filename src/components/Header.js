import React from "react"
import Logo from "../assets/Logo.svg"
import "../css/Header.css"

export default function Header () {
    return (
        <header>
            <img className="header-logo" src={Logo} alt="The B-OND logo: a tree of life with a celtic knot represented in the branches"/>
            <div className="title-container">
                <h1 className="title h1">B-OND</h1>
                <h2 className="title h2" >Dance Collective</h2>
            </div>
            <div className="crop">
                <img className="logo-halved" src={Logo} alt="the B-OND logo split in half"/>
            </div>
        </header>
    )
};