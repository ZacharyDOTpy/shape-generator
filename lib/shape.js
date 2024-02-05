// class constructor for all shapes color
class Shape {
  constructor() {
    this.color = '';
  }

  renderColor(color) {
    this.color = color;
  }
};

// constructor for square
class Square extends Shape {
  // renders square w/ selected color
  render() {
    return `<rect x="75" width="200" height="200" fill="${this.color}"/>`
  }
};

// constructor for circle
class Circle extends Shape {
  // renders circle w/ selected color
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
  }
};

// constructor for triangle
class Triangle extends Shape {
  //renders triangle w/ selected color
  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
  }
};

module.exports = {Square, Circle, Triangle}