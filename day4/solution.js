const utils = require("../utils");

function solution1() {
  const grid = utils.openFile("./input.txt");
  console.log(grid);
  const word = "XMAS";
  const rows = grid.length;
  const cols = grid[0].length;
  const wordLength = word.length;
  let count = 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  function isWordFound(r, c, direction) {
    let row = r;
    let col = c;

    for (let i = 0; i < wordLength; i++) {
      if (row < 0 || row >= rows || col < 0 || col >= cols) {
        return false;
      }

      if (grid[row][col] !== word[i]) {
        return false;
      }
      row += direction[0];
      col += direction[1];
    }
    return true;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      for (const direction of directions) {
        if (isWordFound(row, col, direction)) {
          count++;
        }
      }
    }
  }
  console.log(count);

  return count;
}

// const visited = new Set();
// function dfs(i, r, c, visited) {
//   if (
//     r < 0 ||
//     r >= rows ||
//     c < 0 ||
//     c >= cols ||
//     visited.has(`${r},${c}`) ||
//     grid[r][c] !== word[i]
//   ) {
//     return false;
//   }
//   if (i === word.length - 1) {
//     return true;
//   }
//   visited.add(`${r},${c}`);
//
//   for (const [dr, dc] of directions) {
//     if (dfs(i + 1, r + dr, c + dc, visited)) {
//       return true;
//     }
//   }
//   visited.delete(`${r},${c}`);
//   return false;
// }
// const word = "XMAS";
// for (let r = 0; r < rows; r++) {
//   for (let c = 0; c < cols; c++) {
//     if (grid[r][c] === word[0]) {
//       if (dfs(0, r, c, new Set())) {
//         // console.log(`${r},${c}`);
//         totalWords++;
//       }
//     }
//   }
// }
// console.log(totalWords - 1);
// }

function solution2() {
  const grid = utils.openFile("./input.txt");
  const n = grid.length;
  const m = grid[0].length;

  // Helper function to check if a diagonal matches "MAS" or "SAM"
  function matchesDiagonal(x, y, dx, dy) {
    const diagonal = [];
    for (let i = 0; i < 3; i++) {
      const nx = x + dx * i;
      const ny = y + dy * i;
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) return false; // Out of bounds
      diagonal.push(grid[nx][ny]);
    }
    const str = diagonal.join("");
    return str === "MAS" || str === "SAM";
  }

  let count = 0;

  // Iterate through all possible centers of an X
  for (let i = 1; i < n - 1; i++) {
    // Exclude edges
    for (let j = 1; j < m - 1; j++) {
      // Exclude edges
      // Check diagonals:
      const topLeftToBottomRight = matchesDiagonal(i - 1, j - 1, 1, 1); // ↘
      const bottomLeftToTopRight = matchesDiagonal(i + 1, j - 1, -1, 1); // ↗

      // If both diagonals form an X-MAS, increment the count
      if (topLeftToBottomRight && bottomLeftToTopRight) {
        count++;
      }
    }
  }

  console.log(count);
}

solution2();

module.exports = solution2;
