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

function