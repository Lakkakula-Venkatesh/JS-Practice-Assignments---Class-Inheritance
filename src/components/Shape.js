import { Component } from "react";

// declare class

class Shape extends Component {
  color = null;

  constructor(color) {
    this.color = color;
  }
  drawShape = function() {};
  calculateArea = function() {};
}
module.exports = Shape;