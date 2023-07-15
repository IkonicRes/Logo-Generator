class Shape {
    constructor(color) {
        this.color = color
        this.polygons = {
            triangle: ,
            circle: '  <circle cx="150" cy="100" r="80"',
            square: '  <rect x="40" y="40" width="120" height="120"'
        }
    }

    setColor(color) {
        this.color = color
    }
    //Make render method for the base Shape class
    render(color, text, textColor){
        var fileData = ""
        switch (shape) {
            case 'triangle':
                fileData = //`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                `${this.polygons.triangle} fill="${this.color}" />`
                  //text x="150" y="125" font-size="60" text-anchor="middle" fill="${svgData.color}">SVG</text>
                //</svg>`

                break;
            case 'circle':
                fileData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${this.polygons.circle} fill="${this.color}" />
                  text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">SVG</text>
                </svg>`
                break;
            case 'square':
                fileData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${this.polygons.square} fill="${this.color}" />
                  text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">SVG</text>
                </svg>`
                break;
        }
        return fileData
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
    render(){
        fileData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${points} fill="${this.color}" />
                  text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">SVG</text>
                </svg>`
    }
}

class Square extends Shape {
    //Make triangle class with render method
    render(){
        fileData = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${points} fill="${this.color}" />
                  text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">SVG</text>
                </svg>`
    }
}

module.exports = { Shape, Triangle, Circle, Square}