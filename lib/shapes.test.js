// Import the specific shapes from the shapes module using require syntax.
const { Circle, Triangle, Square } = require('./shapes');

// Define a test case for the render method of the Circle class using Jest.
test('Circle render method returns correct SVG string', () => {
    // Create a new instance of the Circle class with 'red' as the color.
    const circle = new Circle();
    circle.setColor('red'); // Set the color of the circle to red.

    // Expect the render method to return a specific SVG string representing a red circle.
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});
