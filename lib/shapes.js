class Shape {
    constructor(color) {
        this.color = color
    }

    setColor(color) {
        this.color = color
    }

    //Make render method for the base Shape class
    render(){
        return ""
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <polygon points="100, 10 190, 190 10, 190"'
    }
    //Make triangle class with render method
    render(){
        return `${this.points} fill="${this.color}" />`
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <circle cx="150" cy="100" r="80"'
    }
    //Make triangle class with render method
    render(){
        return `${this.points} fill="${this.color}" />`

    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
        this.points = '  <rect x="40" y="40" width="120" height="120"'
    }
    //Make triangle class with render method
    render(){
        return `${this.points} fill="${this.color}" />`

    }
}

module.exports = { Shape, Triangle, Circle, Square}