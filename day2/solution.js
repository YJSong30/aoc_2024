const utils = require("../utils");

function solution1() {
  const inputLines = utils.openFile("./input.txt");

  const numsList = inputLines.map((c) => c.split(" ").map(Number));
  const n = numsList.length;
  let total_safe = 0;

  function isValid(arr) {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
      const diff = Math.abs(arr[i] - arr[i + 1]);

      if (diff < 1 || diff > 3) {
        return false;
      }

      if (arr[i] < arr[i + 1]) {
        decreasing = false;
      } else if (arr[i] > arr[i + 1]) {
        increasing = false;
      }
    }

    return increasing || decreasing;
  }

  //     if (arr[i] < arr[i + 1]) {
  //       if ((Math.abs(arr[i] - arr[i + 1]) > 3) || (Math.abs(arr[i] - arr[i+1] < 1))) {
  //         return true;
  //       }
  //     }

  //     if (arr[i] > arr[i + 1]) {
  //       if ((Math.abs(arr[i] - arr[i + 1]) > 3) || (Math.abs(arr[i] - arr[i+1] < 1))) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }

  for (let i = 0; i < n; i++) {
    if (isValid(numsList[i])) {
      total_safe += 1;
    }
  }

  console.log(total_safe);
}

function solution2() {
  const inputLines = utils.openFile("./input.txt");

  const numsList = inputLines.map((c) => c.split(" ").map(Number));
  const n = numsList.length;
  let total_safe = 0;

  function isValid(arr) {
    if (checkIncreasingOrDecreasing(arr)) {
      return true;
    }

    for (let i = 0; i < arr.length; i++) {
      const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
      if (checkIncreasingOrDecreasing(newArr)) {
        return true;
      }
    }

    return false;
  }

  function checkIncreasingOrDecreasing(arr) {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
      const diff = Math.abs(arr[i] - arr[i + 1]);

      if (diff < 1 || diff > 3) {
        return false;
      }

      if (arr[i] < arr[i + 1]) {
        decreasing = false;
      } else if (arr[i] > arr[i + 1]) {
        increasing = false;
      }
    }

    return increasing || decreasing;
  }

  for (let i = 0; i < n; i++) {
    if (isValid(numsList[i])) {
      console.log("safe");
      total_safe += 1;
    } else {
      console.log("unsafe");
    }
  }

  console.log(total_safe);
}

solution2();

module.exports = solution2;
