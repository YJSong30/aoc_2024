const fs = require("fs");

class Utils {
  constructor() {
    this.fs = fs;
  }

  openFile(path) {
    try {
      const data = this.fs.readFileSync(path, "utf8");
      return this.splitLines(data);
    } catch (err) {
      console.error(err);
    }
  }

  splitLines(data) {
    return data.split("\n").map((l) => l.trim());
  }
}

module.exports = new Utils();

// const fs = require("fs");

// class Utils {
//   constructor() {
//     this.fs = fs;
//   }

//   async openFile(path) {
//     try {
//       const data = this.fs.readFileSync(path, "utf8");
//       return this.splitLines(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   splitLines(data) {
//     return data.split("\n").map((l) => l.trim());
//   }

//   isDigit(chars) {
//     const re = /^\d+$/;
//     return re.test(chars);
//   }
// }
