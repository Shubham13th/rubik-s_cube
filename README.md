# Rubik's Cube Solver (Console App)

## Overview
Hi! This is my Rubik's Cube project for the coding challenge. The goal was to demonstrate my programming and problem-solving skills by building a simple, object-oriented Rubik's Cube simulator in JavaScript (Node.js). The project can scramble a cube, show each move, and (for now) "solve" it by resetting each face. All output is shown in the terminal.

## Features
- **Object-oriented cube representation**: The cube is represented as a class with all six faces.
- **Manual rotation**: You can rotate any face (U, D, F, B, L, R) in both directions.
- **Scrambling**: The cube is scrambled with random moves, and each move is shown.
- **Step-by-step output**: After each move (scramble or solve), the cube's state is displayed as a color string.
- **Demo solver**: The current solver just resets each face to its solved color (not a real Rubik's Cube solution yet).

## How to Run
1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download this repository.
3. Open a terminal in the project folder.
4. Run:
   ```
   node main.js
   ```
5. You will see the cube being scrambled and then "solved" step by step in the terminal.

## Example Output
```
Solved Cube:
Cube SVG Color String: wwwwwwwwwrrrrrrrrrgggggggggyyyyyyyyyooooooooobbbbbbbbb
Scrambling Cube:
Scramble Move 1: D
Cube SVG Color String: ...
Scramble Move 2: B
Cube SVG Color String: ...
... (more moves)
Solving Cube:
Step 1: reset U
Cube SVG Color String: ...
Step 2: reset D
Cube SVG Color String: ...
... (more steps)
```

## Notes
- This is a console application, not a web app. All output is in the terminal.
- The `getCubeSvg()` function just prints the color string, but in a real web app, it could be used to render the cube visually.
- The solver currently just resets each face. A real solver using only valid moves could be added as a next step.

## What I Learned
- How to model a Rubik's Cube in code using object-oriented principles.
- How to implement face rotations and keep track of cube state.
- How to show step-by-step progress in a terminal application.

## Possible Improvements
- Implement a real solving algorithm using only valid moves (e.g., by reversing the scramble).
- Add a web interface to visualize the cube.
- Allow user input for manual moves.

---

Thanks for checking out my project! 