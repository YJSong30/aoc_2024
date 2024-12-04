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
}

solution1();

module.exports = solution1;
