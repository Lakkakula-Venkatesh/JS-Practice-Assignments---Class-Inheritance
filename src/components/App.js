import React, { Component, useState } from "react";
import "../styles/App.css";
import Circle from "./Circle";
import Shape from "./Shape";
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
