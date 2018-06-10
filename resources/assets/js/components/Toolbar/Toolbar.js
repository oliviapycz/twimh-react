import React from "react";
import Logo from "../Logo/Logo";
// import NavigationItems from '../NavigationItems/NavigationItems';
import "./Toolbar.css";

const toolbar = () => (
  <header>
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <h1 className="title">The.World.Is.My.Home</h1>
      </div>

      <div className="connexion">
        <div>
          <button>LOGIN</button>
          <button>REGISTER</button>
        </div>
      </div>
      {/* <nav>{ <NavigationItems /> }</nav> */}
    </div>
  </header>
);

export default toolbar;
