// Define a function to generate SVG content dynamically.
// The function takes three parameters: a shape object, text for the logo, and a text color.
function generateSVG(shape, text, textColor) {
  // Return a template literal string that constructs the SVG.
  // The SVG is set to fill the entire viewport (width and height are 100%).
  // A viewBox attribute is used to define the SVG's viewable area.
  return `
<svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()} <!-- Call the render m . ethod of the shape object to get its SVG representation. -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20" font-family="Arial">${text}</text>
  <!-- The text element is added with the provided text centered both vertically and horizontally. -->
  <!-- The text color, font size, and font family are set according to the function parameters. -->
</svg>`;
}

// Export the generateSVG function as the default export of this module.
// This allows it to be imported and used in other files.
export default generateSVG;
