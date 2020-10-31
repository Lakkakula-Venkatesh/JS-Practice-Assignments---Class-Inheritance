// import using require
const Shape = require("./shape");
// declare class
export default class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  calculateArea = function() {}
}

// export class using module.exports
module.exports = Circle;