const RubiksCube = require('./rubik_cube');

// Simulate getCubeSvg (stub for demonstration)
function getCubeSvg(colorString) {
    // In a real environment, this would render the SVG
    console.log('Cube SVG Color String:', colorString);
}

// 1. Create a solved cube
const cube = new RubiksCube();
console.log('Solved Cube:');
getCubeSvg(cube.toColorString());

// 2. Scramble the cube with detailed logging
console.log('Scrambling Cube:');
const scrambleMoves = 10;
const sides = ['U', 'D', 'F', 'B', 'L', 'R'];
for (let i = 0; i < scrambleMoves; i++) {
    const side = sides[Math.floor(Math.random() * 6)];
    const clockwise = Math.random() > 0.5;
    cube.rotate(side, clockwise);
    console.log(`Scramble Move ${i + 1}: ${side}${clockwise ? '' : "'"}`);
    getCubeSvg(cube.toColorString());
}

// 3. Solve the cube and display each step
console.log('Solving Cube:');
const steps = cube.solve(true);
steps.forEach((step, i) => {
    console.log(`Step ${i + 1}: ${step.move}`);
    getCubeSvg(step.state);
}); 