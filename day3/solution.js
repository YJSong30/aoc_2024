const utils = require("../utils");

// function solution1() {
//   const inputLine = utils.openFile("./input.txt");
//   const pattern = /mul\((\d+),(\d+)\)/g;

//   const matches = inputLine.matchAll(pattern);

//   let total = 0;
//   for (const match of matches) {
//     const num1 = Number(match[1]);
//     const num2 = Number(match[2]);

//     total += num1 * num2;
//   }

//   console.log(total);
// }

// solution1();

// module.exports = solution1;

function solution2() {
  const inputLine = utils.openFile("./input.txt");
  const doPattern = /do\(\)/;
  const dontPattern = /don't\(\)/;
  const mulPattern = /mul\((\d+),(\d+)\)/;
  console.log(inputLine);

  let isEnabled = true;
  let total = 0;

  const parts = inputLine.split(/(mul\(\d+,\d+\)|do\(\)|don't\(\))/);
  console.log(parts);

  for (const part of parts) {
    if (part.trim() === "") {
      continue;
    }

    if (doPattern.test(part)) {
      isEnabled = true;
    } else if (dontPattern.test(part)) {
      isEnabled = false;
    } else if (isEnabled && mulPattern.test(part)) {
      const match = part.match(mulPattern);
      console.log(match);

      if (match) {
        const num1 = Number(match[1]);
        const num2 = Number(match[2]);
        console.log(`Multiplying ${num1} and ${num2}`);
        total += num1 * num2;
      }
    }
  }

  console.log(total);
}

solution2();

module.exports = solution2;
