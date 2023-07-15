const { Triangle, Cirlce, Square } = require('./shapes')

describe('Triangle', () => {
    test('render method should return SVG string with the given shape color', () => {
    const shape = new Triangle()
    shape.setColor('blue')
    expect(shape.render('triangle')).toEqual('  <polygon points="100, 10 190, 190 10, 190" fill="blue" />')
    })
})
describe('Circle', () => {
 //TODO: Write circle test   
})
describe('Square', () => {
    //TODO: Write square test
})