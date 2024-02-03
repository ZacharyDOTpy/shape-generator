const fs = require("fs");
const inquirer = require("inquirer");
const generateShape = require(".lib/utils/generateShape");

const shapeResponse = generateShape.shapeResponse;
const textResponse = generateShape.textResponse;
const createShape = generateShape.createShape;
const generateLogo = generateShape.generateLogo;

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "rawlist",
    message: "Please choose a shape",
    name: "shapePrompt",
    choices: ["Square", "Square", "Triangle"],
  },

  {
    type: "input",
    message: "Type up to three letters you want in your logo",
    name: "textPrompt",
    default: "SVG",
  },

  {
    type: "input",
    message: "Please type a color or hex code for your shape",
    name: "shapeColorPrompt",
    validate: (value) => !!value.trim() || "Please choose a color or hex value",
  },

  {
    type: "input",
    message: "Please type a color or paste a hex value for your text",
    name: "textColorPrompt",
    validate: (value) => !!value.trim() || "Please choose a color or hex value",
  },
];

function init() {
  prompt(questions).then((data) => {
    const shapeResponse = shapeResponse(data.shapePrompt);
    const textResponse = textResponse(data.textPrompt);
    const shapeColor = data.shapeColorPrompt;
    const textColor = data.textColorPrompt;

    const generateShape = createShape(shapeResponse);

    function populateShape() {
      const populatedShape = new generateShape(
        shapeColor,
        textResponse,
        textColor
      );

      return populatedShape;
    }

    const populatedShape = populateShape();

    function writeToFile(filename, populatedShape) {
      const genLogo = generateLogo(populatedShape);

      if (!fs.existsSync("./output")) {
        fs.mkdirSync("./output");
      }

      fs.writeFileSync("./output/logo.svg", genLogo, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    writeToFile("logo.svg", populatedShape);
    console.log("Generated logo.svg");
  });
}

init();
