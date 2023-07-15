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
    //Make triangle class with render method
    points = '  <polygon points="100, 10 190, 190 10, 190"'
    render(){
        fileData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${points} fill="${this.color}" />
                  text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">SVG</text>
                </svg>`
    }
}

class Circle extends Shape {
    //Make triangle class with render method
    points = '  <circle cx="150" cy="100" r="80"'
    render(){
        fileData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${points} fill="${this.color}" />
                  text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">SVG</text>
                </svg>`
    }
}

class Square extends Shape {
    //Make triangle class with render method
    points = '  <rect x="40" y="40" width="120" height="120"'
    render(){
        fileData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${points} fill="${this.color}" />
                  text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">SVG</text>
                </svg>`
    }
}

module.exports = { Shape, Triangle, Circle, Square}