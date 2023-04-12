import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./header.scss";
import React from "react";

const Header = () => {

  return (
    <div className="header">
      <div className="container-box">
        <div className="logo-header">
          <Link to="/">
            <img className="img-fluid" src={logo} alt={logo} />
          </Link>
        </div>
        <div className="logo-nav">
            <ul>
                <li>
                    <a href="/">Demos</a>
                    <a href="/">Style-Guide</a>
                    <a href="/">MemberShip</a>
                </li>
            </ul>
        </div>
        <div className="logo-button">
            <a href="/">Sign in</a>
            <a href="/"><button>Become a subcriber</button></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
