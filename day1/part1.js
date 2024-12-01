const utils = require("../utils");

// async function solution1() {
//   const inputLines = await utils.openFile("./input.txt");

//   // need an array with all on left and all on right
//   let left = [],
//     right = [];
//   inputLines.forEach((c) => {
//     const [l, r] = c.split("   ");
//     left.push(parseInt(l));
//     right.push(parseInt(r));
//   });

//   left.sort();
//   right.sort();

//   let total = 0;
//   for (let i = 0; i < left.length; i++) {
//     total += Math.abs(left[i] - right[i]);
//   }

//   console.log(total);
// }

async function solution2() {
  const inputLines = await utils.openFile("./input.txt");
  const frequency = {};

  // need an array with all on left and all on right
  let left = [],
    right = [];
  inputLines.forEach((c) => {
    const [l, r] = c.split("   ");
    left.push(parseInt(l));
    right.push(parseInt(r));
  });

  left.sort();
  right.sort();

  let total = 0;

  right.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  left.forEach((num) => {
    total += num * (frequency[num] || 0);
  });

  console.log(total);
}

solution2();

module.exports = solution;
