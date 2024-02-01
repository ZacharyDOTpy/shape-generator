class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
}

class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }

  svgProperties(color) {
    return `<rect width="300" hight="200" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }

  svgProperties(color) {
    return `<polygon points="150,0 302,200 5,200" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }

  svgProperties(color) {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

module.exports = { Shape, Square, Triangle, Circle };
