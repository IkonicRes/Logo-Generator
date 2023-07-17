const fs = require('fs')
const { Triangle, Circle, Square, Shape } = require('./shapes')
const { generateLogo, writeFileAsync } = require('../index')

describe('Triangle', () => {
    test('render method should return SVG string with the given shape color', () => {
        const shape = new Triangle()
        shape.setColor('blue')
        expect(shape.renderShape('triangle')).toEqual('  <polygon points="150, 10 250, 190 50, 190" fill="blue" />')
    })
    test('render method should use default color if the shape color is not set', () => {
        const shape = new Triangle();
        // No setColor() called, using the default color
        expect(shape.renderShape('triangle')).toEqual('  <polygon points="150, 10 250, 190 50, 190" fill="black" />');
    });
})

describe('Circle', () => {
 //TODO: Write circle test  
    test('render method should return SVG string with the given shape color', () => {
        const shape = new Circle()
        shape.setColor('blue')
        expect(shape.renderShape('circle')).toEqual('  <circle cx="150" cy="100" r="80" fill="blue" />')
    }) 
    test('render method should use default color if the shape color is not set', () => {
        const shape = new Circle();
        // No setColor() called, using the default color
        expect(shape.renderShape('circle')).toEqual('  <circle cx="150" cy="100" r="80" fill="black" />');
    });
})

describe('Square', () => {
    //TODO: Write square test
    test('render method should return SVG string with the given shape color', () => {
        const shape = new Square()
        shape.setColor('blue')
        expect(shape.renderShape('square')).toEqual('  <rect x="50" y="0" width="200" height="200" fill="blue" />')
    })
    test('render method should use default color if the shape color is not set', () => {
        const shape = new Square();
        // No setColor() called, using the default color
        expect(shape.renderShape('square')).toEqual('  <rect x="50" y="0" width="200" height="200" fill="black" />');
    });
})

describe('MultipleShapes', () => {
    test('render method should return correct SVG strings for different shapes and colors', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        const circle = new Circle();
        circle.setColor('blue');
        const square = new Square();
        square.setColor('red');
      
        expect(triangle.renderShape('triangle')).toEqual('  <polygon points="150, 10 250, 190 50, 190" fill="green" />');
        expect(circle.renderShape('circle')).toEqual('  <circle cx="150" cy="100" r="80" fill="blue" />');
        expect(square.renderShape('square')).toEqual('  <rect x="50" y="0" width="200" height="200" fill="red" />');
    });
})

describe('RenderShapes', () => {
    test('renderShape method should generate correct SVG for Triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue')
        const expectedSVG = '  <polygon points="150, 10 250, 190 50, 190" fill="blue" />';
        expect(shape.renderShape()).toEqual(expectedSVG);
    });
    test('renderShape method should generate correct SVG for Circle', () => {
    const shape = new Circle();
    shape.setColor('red')
    const expectedSVG = '  <circle cx="150" cy="100" r="80" fill="red" />';
    expect(shape.renderShape()).toEqual(expectedSVG);
    });
    test('renderShape method should generate correct SVG for Square', () => {
    const shape = new Square();
    shape.setColor('green')
    const expectedSVG = '  <rect x="50" y="0" width="200" height="200" fill="green" />';
    expect(shape.renderShape()).toEqual(expectedSVG);
    });
})

describe('InvalidInput', () => {
    test('render method should return an empty string for an invalid shape type', () => {
        const shape = new Shape();
        shape.setColor('red');
        expect(shape.renderShape('invalidShape')).toEqual('');
    });
})

describe('ColorChange', () => {
    test('setColor method should change the shape color', () => {
      const shape = new Triangle();
      expect(shape.color).toEqual('black');
  
      shape.setColor('blue');
      expect(shape.color).toEqual('blue');
    });
  });

describe('LogoGeneration', () => {
    test('generateLogo should create correct SVG', () => {
        const acronym = 'ABC';
        const textColor = 'white';
        const shape = ['triangle'];
        const shapeColor = 'blue';
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n  <polygon points="150, 10 250, 190 50, 190" fill="blue" />\n\n  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white" dominant-baseline="middle">ABC</text>\n\n</svg>`;
        expect(generateLogo(acronym, textColor, shape, shapeColor)).toEqual(expectedSVG);
    });
})

describe('WritingFiles', () => {
    test('writeFileAsync should create a file with correct data', async () => {
        const filePath = './test.svg';
        const data = 'test data';
        await writeFileAsync(filePath, data);
      
        const fileExists = fs.existsSync(filePath);
        expect(fileExists).toBeTruthy();
      
        const fileData = fs.readFileSync(filePath, 'utf8');
        expect(fileData).toEqual(data);
      
        // Clean up - delete the created file
        fs.unlinkSync(filePath);
    });
})
