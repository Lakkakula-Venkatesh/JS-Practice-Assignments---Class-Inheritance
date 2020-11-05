// import using require
const Shape = require("./shape").default;
// declare class
class Circle extends Shape {
  constructor(props) {
    super(props);
  }
  calculateArea = function() {}
}

// export class using module.exports
module.exports = Circle;