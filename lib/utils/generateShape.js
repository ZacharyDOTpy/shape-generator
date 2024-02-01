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

  
}