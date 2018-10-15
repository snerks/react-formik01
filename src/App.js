import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import Basic from "./basic";

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ padding: 15 }}>
        <Basic />
      </div>
    );
  }
}

export default App;
