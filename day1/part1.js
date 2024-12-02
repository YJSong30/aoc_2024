const utils = require("../utils");

function solution1() {
  const inputLines = utils.openFile("./sample.txt");

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
  for (let i = 0; i < left.length; i++) {
    total += Math.abs(left[i] - right[i]);
  }

  console.log(total);
}

function solution2() {
  const inputLines = utils.openFile("./input.txt");
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

solution1();

module.exports = solution1;
