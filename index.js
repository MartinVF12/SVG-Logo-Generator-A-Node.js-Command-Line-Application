import inquirer from 'inquirer';
import { Circle, Square, Triangle } from './lib/shapes.js';
import fs from 'fs';
import svgGenerator from './lib/svgGenerator.js';

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want for the logo? (Up to 3 characters):',
        validate: input => input.length <= 3 ? true : 'The text cannot be more than 3 characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color name or hexadecimal code):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color name or hexadecimal code):',
    },
];

inquirer.prompt(questions).then(answers => {
    let shape;
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

    shape.setColor(answers.shapeColor);
    const svgContent = svgGenerator(shape, answers.text, answers.textColor);

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
});
