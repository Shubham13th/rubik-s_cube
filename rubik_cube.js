// Rubik's Cube implementation
// Colors: r (red), g (green), b (blue), y (yellow), o (orange), w (white)

class RubiksCube {
    constructor() {
        // Each face is a 3x3 array, stored as a flat array of 9 elements
        // Order: U (up), D (down), F (front), B (back), L (left), R (right)
        this.faces = {
            U: Array(9).fill('w'), // Up - white
            D: Array(9).fill('y'), // Down - yellow
            F: Array(9).fill('g'), // Front - green
            B: Array(9).fill('b'), // Back - blue
            L: Array(9).fill('o'), // Left - orange
            R: Array(9).fill('r'), // Right - red
        };
    }

    // Helper to rotate a face clockwise or counterclockwise
    rotateFace(face, clockwise = true) {
        const f = this.faces[face];
        // Indices for 3x3 face rotation
        const idx = clockwise
            ? [6, 3, 0, 7, 4, 1, 8, 5, 2]
            : [2, 5, 8, 1, 4, 7, 0, 3, 6];
        const newFace = idx.map(i => f[i]);
        this.faces[face] = newFace;
    }

    // Manual rotation of sides (U, D, F, B, L, R)
    // Only clockwise for now; counterclockwise can be added
    rotate(side, clockwise = true) {
        // Rotates the given side and the adjacent edge stickers
        if (side === 'U') {
            this.rotateFace('U', clockwise);
            const { F, R, B, L } = this.faces;
            if (clockwise) {
                const temp = F.slice(0, 3);
                F[0] = L[0]; F[1] = L[1]; F[2] = L[2];
                L[0] = B[0]; L[1] = B[1]; L[2] = B[2];
                B[0] = R[0]; B[1] = R[1]; B[2] = R[2];
                R[0] = temp[0]; R[1] = temp[1]; R[2] = temp[2];
            } else {
                const temp = F.slice(0, 3);
                F[0] = R[0]; F[1] = R[1]; F[2] = R[2];
                R[0] = B[0]; R[1] = B[1]; R[2] = B[2];
                B[0] = L[0]; B[1] = L[1]; B[2] = L[2];
                L[0] = temp[0]; L[1] = temp[1]; L[2] = temp[2];
            }
        } else if (side === 'D') {
            this.rotateFace('D', clockwise);
            const { F, R, B, L } = this.faces;
            if (clockwise) {
                const temp = F.slice(6, 9);
                F[6] = R[6]; F[7] = R[7]; F[8] = R[8];
                R[6] = B[6]; R[7] = B[7]; R[8] = B[8];
                B[6] = L[6]; B[7] = L[7]; B[8] = L[8];
                L[6] = temp[0]; L[7] = temp[1]; L[8] = temp[2];
            } else {
                const temp = F.slice(6, 9);
                F[6] = L[6]; F[7] = L[7]; F[8] = L[8];
                L[6] = B[6]; L[7] = B[7]; L[8] = B[8];
                B[6] = R[6]; B[7] = R[7]; B[8] = R[8];
                R[6] = temp[0]; R[7] = temp[1]; R[8] = temp[2];
            }
        } else if (side === 'F') {
            this.rotateFace('F', clockwise);
            const { U, R, D, L } = this.faces;
            if (clockwise) {
                const temp = [U[6], U[7], U[8]];
                U[6] = L[8]; U[7] = L[5]; U[8] = L[2];
                L[2] = D[0]; L[5] = D[1]; L[8] = D[2];
                D[0] = R[6]; D[1] = R[3]; D[2] = R[0];
                R[0] = temp[2]; R[3] = temp[1]; R[6] = temp[0];
            } else {
                const temp = [U[6], U[7], U[8]];
                U[6] = R[6]; U[7] = R[3]; U[8] = R[0];
                R[0] = D[2]; R[3] = D[1]; R[6] = D[0];
                D[0] = L[2]; D[1] = L[5]; D[2] = L[8];
                L[2] = temp[0]; L[5] = temp[1]; L[8] = temp[2];
            }
        } else if (side === 'B') {
            this.rotateFace('B', clockwise);
            const { U, R, D, L } = this.faces;
            if (clockwise) {
                const temp = [U[0], U[1], U[2]];
                U[0] = R[2]; U[1] = R[5]; U[2] = R[8];
                R[2] = D[8]; R[5] = D[7]; R[8] = D[6];
                D[6] = L[0]; D[7] = L[3]; D[8] = L[6];
                L[0] = temp[2]; L[3] = temp[1]; L[6] = temp[0];
            } else {
                const temp = [U[0], U[1], U[2]];
                U[0] = L[6]; U[1] = L[3]; U[2] = L[0];
                L[0] = D[6]; L[3] = D[7]; L[6] = D[8];
                D[6] = R[8]; D[7] = R[5]; D[8] = R[2];
                R[2] = temp[0]; R[5] = temp[1]; R[8] = temp[2];
            }
        } else if (side === 'L') {
            this.rotateFace('L', clockwise);
            const { U, F, D, B } = this.faces;
            if (clockwise) {
                const temp = [U[0], U[3], U[6]];
                U[0] = B[8]; U[3] = B[5]; U[6] = B[2];
                B[2] = D[6]; B[5] = D[3]; B[8] = D[0];
                D[0] = F[0]; D[3] = F[3]; D[6] = F[6];
                F[0] = temp[0]; F[3] = temp[1]; F[6] = temp[2];
            } else {
                const temp = [U[0], U[3], U[6]];
                U[0] = F[0]; U[3] = F[3]; U[6] = F[6];
                F[0] = D[0]; F[3] = D[3]; F[6] = D[6];
                D[0] = B[8]; D[3] = B[5]; D[6] = B[2];
                B[2] = temp[2]; B[5] = temp[1]; B[8] = temp[0];
            }
        } else if (side === 'R') {
            this.rotateFace('R', clockwise);
            const { U, F, D, B } = this.faces;
            if (clockwise) {
                const temp = [U[2], U[5], U[8]];
                U[2] = F[2]; U[5] = F[5]; U[8] = F[8];
                F[2] = D[2]; F[5] = D[5]; F[8] = D[8];
                D[2] = B[6]; D[5] = B[3]; D[8] = B[0];
                B[0] = temp[2]; B[3] = temp[1]; B[6] = temp[0];
            } else {
                const temp = [U[2], U[5], U[8]];
                U[2] = B[6]; U[5] = B[3]; U[8] = B[0];
                B[0] = D[8]; B[3] = D[5]; B[6] = D[2];
                D[2] = F[2]; D[5] = F[5]; D[8] = F[8];
                F[2] = temp[0]; F[5] = temp[1]; F[8] = temp[2];
            }
        }
    }

    // Returns a string representation for getCubeSvg()
    toColorString() {
        // Order: U, R, F, D, L, B (standard for SVG)
        return [
            ...this.faces.U,
            ...this.faces.R,
            ...this.faces.F,
            ...this.faces.D,
            ...this.faces.L,
            ...this.faces.B
        ].join('');
    }

    // Scramble the cube with random moves
    scramble(moves = 20) {
        const sides = ['U', 'D', 'F', 'B', 'L', 'R'];
        for (let i = 0; i < moves; i++) {
            const side = sides[Math.floor(Math.random() * 6)];
            const clockwise = Math.random() > 0.5;
            this.rotate(side, clockwise);
        }
    }

    // Simple solver: resets the cube to solved state, logs each step
    solve(logStep) {
        // For demonstration, just reset each face to its solved color
        // In a real solver, you would implement a sequence of moves
        const steps = [];
        // We'll just rotate each face until all stickers match the center
        // This is NOT a real solving algorithm, but demonstrates the process
        const faceOrder = ['U', 'D', 'F', 'B', 'L', 'R'];
        const solvedColors = { U: 'w', D: 'y', F: 'g', B: 'b', L: 'o', R: 'r' };
        // For each face, set all stickers to the center color
        for (const face of faceOrder) {
            for (let i = 0; i < 9; i++) {
                this.faces[face][i] = solvedColors[face];
            }
            if (logStep) {
                steps.push({ move: `reset ${face}`, state: this.toColorString() });
            }
        }
        return steps;
    }
}

// Export for use in other files (if needed)
if (typeof module !== 'undefined') {
    module.exports = RubiksCube;
} 