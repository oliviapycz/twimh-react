import React from "react";
import earthLogo from "../../../images/earthLogo.svg";
import "./Logo.css";

const logo = props => (
  <div className="Logo">
    <img src={earthLogo} alt="logo" width="45px" />
    <h1>T.W.I.M.H</h1>
  </div>
);

export default logo;
