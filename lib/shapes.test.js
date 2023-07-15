const { Triangle, Circle, Square, Shape } = require('./shapes')

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
        expect(shape.renderShape('square')).toEqual('  <rect x="150" y="100" width="120" height="120" fill="blue" />')
    })
    test('render method should use default color if the shape color is not set', () => {
        const shape = new Square();
        // No setColor() called, using the default color
        expect(shape.renderShape('square')).toEqual('  <rect x="150" y="100" width="120" height="120" fill="black" />');
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
        expect(square.renderShape('square')).toEqual('  <rect x="150" y="100" width="120" height="120" fill="red" />');
      });
})
describe('InvalidInput', () => {
    test('render method should return an empty string for an invalid shape type', () => {
        const shape = new Shape();
        shape.setColor('red');
        // Pass an invalid shape type
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