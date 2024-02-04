const fs = require('fs');
const inquirer = require('inquirer');
const {Square, Circle, Triangle} = require('./lib/shape');

const questions = [
  {
    name: 'text',
    message: 'Type 1 - 3 characters you want in your logo.'
  },
  {
    name: 'textColor',
    message: 'Enter the color you want your text to be.'
  },
  {
    type: 'rawlist',
    name: 'shape',
    message: 'Pick the shape of your logo.',
    choices: [
      'Circle',
      'Square',
      'Triangle'
    ]
  },
  {
    name: 'shapeColor',
    message: 'Enter the color you want your logo to be.'
  }
]

const procQuestions = (answer) => {
  let shape;
  if (answer.shape === 'Square') {
    shape = new Square(answer.shapeColor);
  } else if (answer.shape === 'Circle') {
    shape = new Circle(answer.shapeColor);
  } else {
    shape = new Triangle(answer.shapeColor);
  }

  const svgLogo = `
  <svg width="300px" height="200px">
      ${shape.render()}
      <text x="50%" y="60%" font-size="50px" dominant-baseline="middle" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>
  </svg>`

  writeToFile('output.svg', svgLogo);
}

function writeToFile(fileName, data) {
  if (!fs.existsSync('./output')) {
    fs.mkdirSync('./output');
  }

  fs.writeFileSync('./output/' + fileName, data);
  console.log('File has been created at ./output/' + fileName);
}

inquirer.prompt(questions)
  .then(answer => {
    procQuestions(answer);
  });