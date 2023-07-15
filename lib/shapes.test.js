const { Triangle, Cirlce, Square } = require('./shapes')

describe('Triangle', () => {
    test('render method should return SVG string with the given shape color', () => {
    const shape = new Triangle()
    shape.setColor('blue')
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"> />')
    })
})
describe('Circle', () => {
 //TODO: Write circle test   
})
describe('Square', () => {
    //TODO: Write square test
})