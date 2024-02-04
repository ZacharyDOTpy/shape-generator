// class constructor for all shapes color
class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(newColor) {
    this.color = newColor;
  }
};

// constructor for square
class Square extends Shape {
  constructor(color) {
    super(color);
  }
  // renders suare w/ selected color
  render() {
    return `<rect x="75px" y="50px" width="150px" height="150px" fill="${this.color}" />`
  }
};

// constructor for circle
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
  // renders circle w/ selected color
  render() {
    return `<circle cx="150px" cy="120px" r="75px" fill="${this.color}" />`
  }
};

// constructor for triangle
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
  //renders triangle w/ selected color
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
};

module.exports = {Square, Circle, Triangle}