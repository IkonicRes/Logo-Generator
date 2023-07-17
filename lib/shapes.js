//Base class of shape, should hold a default color of black and if rendered should return an empty string.
class Shape {
    constructor() {
        this.color = "black"
    }
    //This method when called should set the object's color.
    setColor(color) {
        this.color = color
    }
    //Make render method for the base Shape class
    renderShape(){
        return ""
    }
}

//Triangle subclass of Shape, should super to get default and has an added property of "points", which determine the shape's geometry.
class Triangle extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <polygon points="150, 10 250, 190 50, 190"'
    }
    //This method returns the shape's svg string with the geometry points and set color.
    renderShape(){
        return `${this.points} fill="${this.color}" />`
    }
}

//Circle subclass of Shape, should super to get default and has an added property of "points", which determine the shape's geometry.
class Circle extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <circle cx="150" cy="100" r="80"'
    }
    //This method returns the shape's svg string with the geometry points and set color.
    renderShape(){
        return `${this.points} fill="${this.color}" />`
    }
}

//Square subclass of Shape, should super to get default and has an added property of "points", which determine the shape's geometry.
class Square extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <rect x="50" y="0" width="200" height="200"'
    }
    //This method returns the shape's svg string with the geometry points and set color.
    renderShape(){
        return `${this.points} fill="${this.color}" />`
    }
}
//Export all classes for testing and use in index.js
module.exports = { Shape, Triangle, Circle, Square}