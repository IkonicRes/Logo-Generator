const { Triangle, Circle, Square } = require('./shapes')

describe('Triangle', () => {
    test('render method should return SVG string with the given shape color', () => {
        const shape = new Triangle()
        shape.setColor('blue')
        expect(shape.renderShape('triangle')).toEqual('  <polygon points="100, 10 190, 190 10, 190" fill="blue" />')
    })
})
describe('Circle', () => {
 //TODO: Write circle test  
    test('render method should return SVG string with the given shape color', () => {
        const shape = new Circle()
        shape.setColor('blue')
        expect(shape.renderShape('circle')).toEqual('  <circle cx="150" cy="100" r="80" fill="blue" />')
    }) 
})
describe('Square', () => {
    //TODO: Write square test
    test('render method should return SVG string with the given shape color', () => {
        const shape = new Square()
        shape.setColor('blue')
        expect(shape.renderShape('square')).toEqual('  <rect x="40" y="40" width="120" height="120" fill="blue" />')
        })
})