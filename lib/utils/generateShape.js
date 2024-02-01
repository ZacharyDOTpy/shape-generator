const shapeGenerator = require('../data/shape');

function shapeResponse (shapePrompt) {
  if (shapePrompt.toLowerCase() == "square" ||
      shapePrompt.toLowerCase() == "circle" ||
      shapePrompt.toLowerCase() == "triangle") {
        return prompt.toLowerCase();
      } else {
        throw new Error('Enter Circle, Square, or Triangle')
      }
};

function textResponse (textPrompt) {
  const letters = /^[A-Za-z]+$/

  if (textPrompt.length > 3) {
    throw new Error('Text cannot be more than 3 letters')
  } else if (!textPrompt.match(letters)) {
    throw new Error('Text can only contain letters')
  } else {
    return textPrompt.toUpperCase()
  }
};