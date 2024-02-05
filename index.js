const fs = require('fs');
const inquirer = require('inquirer');
const {Square, Circle, Triangle} = require('./lib/shape');

class Svg{
  constructor(){
      this.textElement = ''
      this.shapeElement = ''
  }
  render(){

      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text,color){
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape){
      this.shapeElement = shape.render()

  }
  
}


const questions = [
  {
      type: "input",
      name: "text",
      message: "Enter up to 3 Characters:",
  },
  {
      type: "input",
      name: "text-color",
      message: "Enter a color keyword OR a hexadecimal number for text color:",
  },
  {
      type: "input",
      name: "shape",
      message: "Enter a color keyword OR a hexadecimal number for shape color:",
  },
  {
      type: "list",
      name: "pixel-image",
      message: "Choose which shape you would like:",
      choices: ["Circle", "Square", "Triangle"],
  },
];

// Function to write data to file
function writeToFile(fileName, data) {
console.log("Writing [" + data + "] to file [" + fileName + "]")
  fs.writeFile(fileName, data, function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("you have generated a logo.svg!");
  });
}

async function init() {
  console.log("Starting init");
let svgString = "";
let svg_file = "logo.svg";

  // Prompt the user for answers
  const answers = await inquirer.prompt(questions);

//user text
let user_text = "";
if (answers.text.length > 0 && answers.text.length < 4) {
  user_text = answers.text;
} else {
  console.log("Please enter 1-3 Characters, no more and no less");
      return;
}
//user font color
user_font_color = answers["text-color"];
//user shape color
user_shape_color = answers.shape;
//user shape type
user_shape_type = answers["pixel-image"];


let user_shape;
if (user_shape_type === "Square" || user_shape_type === "square") {
  user_shape = new Square();
}
else if (user_shape_type === "Circle" || user_shape_type === "circle") {
  user_shape = new Circle();
}
else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
  user_shape = new Triangle();
}
else {
  console.log("Invalid shape!");
}
user_shape.renderColor(user_shape_color);

// Create a new Svg instance and add the shape and text elements to it
let svg = new Svg();
svg.setTextElement(user_text, user_font_color);
svg.setShapeElement(user_shape);
svgString = svg.render();


console.log("Shape generation complete!");
console.log("Writing shape to file...");
writeToFile(svg_file, svgString); 
}

init()