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
    //TODO: Make svg generation based on input
}

function writeFileAsync(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {err ? reject(err) : resolve()})
    }) 
}

promptUserInput()
    .then((userInput) => {
        const svgData = generateSVG(
            userInput.text,
            userInput.textColor,
            userInput.shape,
            userInput.shapeColor
        )
        return writeFileAsync('logo.svg', svgData) 
    })
    .then(() => {
        console.log("Generated a new logo at 'logo.svg'")
    })
    .catch((error) => {
        console.log("An Error has occured!: ", error)
    })