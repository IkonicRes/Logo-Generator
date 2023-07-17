class Shape {
    constructor() {
        this.color = "black"
    }

    setColor(color) {
        this.color = color
    }

    //Make render method for the base Shape class
    renderShape(){
        return ""
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <polygon points="150, 10 250, 190 50, 190"'
    }
    //Make triangle class with render method
    renderShape(){
        return `${this.points} fill="${this.color}" />`
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <circle cx="150" cy="100" r="80"'
    }
    //Make triangle class with render method
    renderShape(){
        return `${this.points} fill="${this.color}" />`

    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <rect x="50" y="0" width="200" height="200"'
    }
    //Make triangle class with render method
    renderShape(){
        return `${this.points} fill="${this.color}" />`

    }
}

module.exports = { Shape, Triangle, Circle, Square}