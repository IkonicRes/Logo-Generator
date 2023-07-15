class Shape {
    constructor(color) {
        this.color = color
    }

    setColor(color) {
        this.color = color
    }
    //Make render method for the base Shape class
}

class Triangle extends Shape {
    //Make triangle class with render method
}

class Circle extends Shape {
    //Make triangle class with render method
}

class Square extends Shape {
    //Make triangle class with render method
}

module.exports = { Shape, Triangle, Cirlce, Square}