const inquirer = require('inquirer')
const fs = require('fs')
const {Triangle, Circle, Square } = require("./lib/shapes")

function promptUserInput() {
    return inquirer.prompt([
        {
            type: "input",
            name: "acronym",
            message: "Enter your logo's acronym, up to 3 characters."
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter your logo's text color as a keyword or hexadecimal number"
        },
        {
            type: "checkbox",
            name: "shape",
            message: "Choose your logo's shape!",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter your logo's shape color as a keyword or hexadecimal number."
        },
    ])
}

function generateLogo(text, textColor, shape, shapeColor){
    let chosenShape;
    let shapeString = shape.join("")
    switch (shapeString) {
        case "triangle":
            chosenShape = new Triangle();
            break;
        case "circle":
            chosenShape = new Circle();
            break
        case "square":
            chosenShape = new Square();
            break
    }
    chosenShape.setColor(shapeColor)
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n${chosenShape.renderShape()}\n\n  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}" dominant-baseline="middle">${text}</text>\n\n</svg>`
}

function writeFileAsync(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {err ? reject(err) : resolve()})
    }) 
}

promptUserInput()
  .then((userInput) => {
    console.log(userInput)
    const svgData = generateLogo(
      userInput.acronym,
      userInput.textColor,
      userInput.shape,
      userInput.shapeColor
    );
    return writeFileAsync('logo.svg', svgData);
  })
  .then(() => {
    console.log("Generated a new logo at 'logo.svg'");
  })
  .catch((error) => {
    console.log("An Error has occurred!: ", error);
  });