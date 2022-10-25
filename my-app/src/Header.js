
import React from "react";
import logo from "../src/images/logo192.png"

function Header(){
    return (
        <nav className="nav-items">
            <img src={logo} className="logo" width="60px" alt=""></img>
            <h3 className="nav-title">ReactFacts</h3>
            <h4 className="nav-description">React Course - Project 1</h4>
        </nav>
    )
}

export default Header;