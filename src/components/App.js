import React, { Component, useState } from "react";
import "../styles/App.css";
const Circle =  require("./Circle");
const Shape = require("./Shape");
class App extends Component {
  render() {
    return (
      <>
        <Circle />
        <Shape />
      </>
    );
  }
}

export default App;
