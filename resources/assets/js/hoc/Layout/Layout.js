import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";
import Slogan from "../../components//Slogan/Slogan";
// import Travels from '../../containers//Travels/Travels';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div>
          <Toolbar />
        </div>
        <main>
          <Slogan />
          {/* <Travels /> */}
        </main>
      </Aux>
    );
  }
}

export default Layout;
