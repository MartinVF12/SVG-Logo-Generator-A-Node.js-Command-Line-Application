// Import necessary modules: inquirer for CLI prompts, file system (fs) for file operations, 
// and the shapes and SVG generator functions from their respective modules.
import inquirer from 'inquirer';
import { Circle, Square, Triangle } from './lib/shapes.js';
import fs from 'fs';
import svgGenerator from './lib/svgGenerator.js';

// Define a list of questions for user input. The questions will be used by inquirer to prompt the user.
const questions = [
    {
        // Prompt for the logo text, limited to 3 characters
        type: 'input',
        name: 'text',
        message: 'What text do you want for the logo? (Up to 3 characters):',
        // Validator to ensure the input is 3 characters or less
        validate: input => input.length <= 3 ? true : 'The text cannot be more than 3 characters.'
    },
    {
        // Prompt for the color of the text. Can be a named color or hex code.
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color name or hexadecimal code):',
    },
    {
        // Prompt for choosing the shape of the logo
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        // Options for shapes
        choices: ['circle', 'triangle', 'square'],
    },
    {
        // Prompt for the color of the shape. Can also be a named color or hex code.
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color name or hexadecimal code):',
    },
];

// Use inquirer to show prompts to the user and capture the input.
inquirer.prompt(questions).then(answers => {
    let shape;
    // Depending on the shape chosen by the user, create an instance of the appropriate class.
    switch (answers.shape) {
        case 'circle':
            shape = new Circle();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        case 'square':
            shape = new Square();
            break;
    }

    // Set the color of the shape based on the user's input.
    shape.setColor(answers.shapeColor);
    // Generate the SVG content using the user's choices.
    const svgContent = svgGenerator(shape, answers.text, answers.textColor);

    // Write the SVG content to a file named 'logo.svg' in the current directory.
    fs.writeFileSync('logo.svg', svgContent);
    // Log a confirmation message to the console.
    console.log('Generated logo.svg');
});
