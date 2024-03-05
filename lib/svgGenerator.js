function generateSVG(shape, text, textColor) {
  return `
<svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20" font-family="Arial">${text}</text>
</svg>`;
}

export default generateSVG;
