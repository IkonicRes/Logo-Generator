//Import file system to write svg to local folder "/examples"
const fs = require('fs')
//Import the necessary functions and classes for testing from /lib/shapes.js and /index.js
const { Triangle, Circle, Square, Shape } = require('./shapes')
const { generateLogo, writeFileAsync } = require('../index')
const { exit } = require('process')
//Below are the tests that I designed as I made the app, to ensure it ran smoothly.
describe('Triangle', () => {
    //This test checks whether creating a triangle shape and changing its color returns the correct shape with the new color.
    test('render method should return SVG string with the given shape color', () => {
        //Make a new triangle object
        const shape = new Triangle()
        //Call setColor to change color to blue
        shape.setColor('blue')
        //Expect a blue triangle
        expect(shape.renderShape('triangle')).toEqual('  <polygon points="150, 10 250, 190 50, 190" fill="blue" />')
    })
    //This test checks whether not entering a color sets it to default color.
    test('render method should use default color if the shape color is not set', () => {
        //Make a new triangle object
        const shape = new Triangle();
        //No setColor() called, using the default color, should expect a black triangle.
        expect(shape.renderShape('triangle')).toEqual('  <polygon points="150, 10 250, 190 50, 190" fill="black" />');
    });
})

describe('Circle', () => {
    //This test checks whether creating a circle shape and changing its color returns the correct shape with the new color.
    test('render method should return SVG string with the given shape color', () => {
        //Make a new circle object
        const shape = new Circle()
        //Use setColor function to make it blue
        shape.setColor('blue')
        //Expect a blue circle
        expect(shape.renderShape('circle')).toEqual('  <circle cx="150" cy="100" r="80" fill="blue" />')
    }) 
    //This test checks whether not entering a color sets it to default color.
    test('render method should use default color if the shape color is not set', () => {
        //Make a new circle object
        const shape = new Circle();
        // No setColor() called, using the default color, should expect a black circle.
        expect(shape.renderShape('circle')).toEqual('  <circle cx="150" cy="100" r="80" fill="black" />');
    });
})

describe('Square', () => {
    //This test checks whether creating a square shape and changing its color returns the correct shape with the new color.
    test('render method should return SVG string with the given shape color', () => {
        //Make a new square object
        const shape = new Square()
        //Use setColor to change it blue
        shape.setColor('blue')
        //Expect a blue square
        expect(shape.renderShape('square')).toEqual('  <rect x="50" y="0" width="200" height="200" fill="blue" />')
    })
    //This test checks whether not entering a color sets it to default color.
    test('render method should use default color if the shape color is not set', () => {
        //Make a new square object
        const shape = new Square();
        // No setColor() called, using the default color, should expect a black square.
        expect(shape.renderShape('square')).toEqual('  <rect x="50" y="0" width="200" height="200" fill="black" />');
    });
})

describe('MultipleShapes', () => {
    //This test makes three different shapes with different colors and checks the returned svg string.
    test('render method should return correct SVG strings for different shapes and colors', () => {
        //Make new triangle, circle, and square and use setColor on each to set them to different colors, checking if the program runs successfully more than once.
        const triangle = new Triangle();
        triangle.setColor('green');
        const circle = new Circle();
        circle.setColor('blue');
        const square = new Square();
        square.setColor('red');
        //Should expect a green triangle, a blue circle, and a red square.
        expect(triangle.renderShape('triangle')).toEqual('  <polygon points="150, 10 250, 190 50, 190" fill="green" />');
        expect(circle.renderShape('circle')).toEqual('  <circle cx="150" cy="100" r="80" fill="blue" />');
        expect(square.renderShape('square')).toEqual('  <rect x="50" y="0" width="200" height="200" fill="red" />');
    });
})

describe('InvalidInput', () => {
    //This test checks whether the method returns an empty string if incorrect data is passed into the "shape" category, should I make it an expandable list or so...
    test('render method should return an empty string for an invalid shape type', () => {
        //Make a base Shape object
        const shape = new Shape();
        //Set the shape to red
        shape.setColor('red');
        //Render a shape with the string "invalidShape" and check that it returns an empty string.
        expect(shape.renderShape('invalidShape')).toEqual('');
    });
})

describe('ColorChange', () => {
    //This test directly checks the setColor function by checking the color directly
    test('setColor method should change the shape color', () => {
        //Make a new triangle object
        const shape = new Triangle();
        //Expect the color to equal the default color black.
        expect(shape.color).toEqual('black');
        //Set the color to blue
        shape.setColor('blue');
        //Expect it to equal blue
        expect(shape.color).toEqual('blue');
    });
  });

describe('LogoGeneration', () => {
    //This test should check the entire logo generation by passing a pregenerated svgData object in and checking it with the generateLogo function
    test('generateLogo should create correct SVG', () => {
        const acronym = 'ABC';
        const textColor = 'white';
        const shape = ['triangle'];
        const shapeColor = 'blue';
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n  <polygon points="150, 10 250, 190 50, 190" fill="blue" />\n\n  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white" dominant-baseline="middle">ABC</text>\n\n</svg>`;
        //Should expect a blue triangle with "ABC" in white text.
        expect(generateLogo(acronym, textColor, shape, shapeColor)).toEqual(expectedSVG);
    });
})

describe('WritingFiles', () => {
    //This test should check if the writeFileAsync function creates a file in the local directory with the correct data
    test('writeFileAsync should create a file with correct data', async () => {
        //Declare a place to put our test file.
        const filePath = './test.svg';
        //Make the test data file content
        const data = 'test data';
        //Fire the writeFileAsync and await it
        const asyncThing = await writeFileAsync(filePath, data);
        //Query whether the file exists and set it to a bool
        const fileExists = await fs.existsSync(filePath);
        //Check if bool is true
        await expect(fileExists).toBeTruthy();
        //Read the data off the file in utf8 encoding
        const fileData = await fs.readFileSync(filePath, 'utf8');
        //Check if the saved data equals what we entered to begin with @ data
        await expect(fileData).toEqual(data);
      
        //Delete the created file so we don't leave a mess.
        await fs.unlinkSync(filePath);
    });
})
