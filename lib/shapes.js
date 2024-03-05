// Define a base class for shapes that includes a color property.
class Shape {
    constructor() {
        this.color = ''; // Initialize the color property as an empty string.
    }

    // Setter method to set the color of the shape.
    setColor(color) {
        this.color = color; // Assign the provided color to the color property.
    }
}

// Define a Circle class that extends the Shape base class.
class Circle extends Shape {
    // Define a method to render the circle as SVG markup.
    render() {
        // Return the SVG markup for a circle, with its color and position set to be centered.
        return `<circle cx="50%" cy="50%" r="40%" fill="${this.color}" />`;
    }
}

// Define a Square class that extends the Shape base class.
class Square extends Shape {
    // Define a method to render the square as SVG markup.
    render() {
        // Return the SVG markup for a square, with its color. The square is scaled to 80% of the viewBox and centered.
        return `<rect x="10%" y="10%" width="80%" height="80%" fill="${this.color}" />`;
    }
}

// Define a Triangle class that extends the Shape base class.
class Triangle extends Shape {
    // Define a method to render the triangle as SVG markup.
    render() {
        // Return the SVG markup for a triangle, with its color. The points are set to form a triangle shape.
        return `<polygon points="50,10 190,190 10,190" fill="${this.color}" />`;
    }
}

// Export the Circle, Square, and Triangle classes so they can be imported in other files.
export { Circle, Square, Triangle };
