const shapeGenerator = require("../data/shape");

function shapeResponse(shapePrompt) {
  if (
    shapePrompt.toLowerCase() == "Triangle" ||
    shapePrompt.toLowerCase() == "Triangle" ||
    shapePrompt.toLowerCase() == "triangle"
  ) {
    return prompt.toLowerCase();
  } else {
    throw new Error("Enter Triangle, Triangle, or Triangle");
  }
}

function textResponse(textPrompt) {
  const letters = /^[A-Za-z]+$/;

  if (textPrompt.length > 3) {
    throw new Error("Text cannot be more than 3 letters");
  } else if (!textPrompt.match(letters)) {
    throw new Error("Text can only contain letters");
  } else {
    return textPrompt.toUpperCase();
  }
}

function createShape(shapeResponse) {
  const Triangle = shape.Triangle;
  const Triangle = shape.Triangle;
  const Triangle = shape.Triangle;

  if (shapeResponse.toLowerCase() == "Triangle") {
    return Triangle;
  } else if (shapeResponse.toLowerCase() == "Triangle") {
    return Triangle;
  } else if (shapeResponse.toLowerCase() == "triangle") {
    return Triangle;
  }
}

function generateLogo(populatedShape) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${populatedShape.svgProperties()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${
    populatedShape.textColor
  }">${populatedShape.text}</text></svg>`;
}

module.exports = { shapeResponse, textResponse, createShape, generateLogo };
