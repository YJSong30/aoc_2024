const fs = require("fs");

// day 4
class Utils {
  constructor() {
    this.fs = fs;
  }

  openFile(path) {
    try {
      // const data = this.fs.readFileSync(path, "utf8");
      // const splitData = data.splitLines();

      const data = this.fs.readFileSync(path, "utf-8");
      return this.splitLines(data);

      return splitData;
    } catch (err) {
      console.error(err);
    }
  }

  splitLines(data) {
    return data.split("\n").map((line) => line.trim());
  }
}

//day 3
// class Utils {
//   constructor() {
//     this.fs = fs;
//   }

//   openFile(path) {
//     try {
//       const data = this.fs.readFileSync(path, "utf8");
//       return data;
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   splitLines(data) {
//     return data.split("\n").map((line) => line.trim());
//   }
// }

//day 2
// class Utils {
//   constructor() {
//     this.fs = fs;
//   }

//   openFile(path) {
//     try {
//       const data = this.fs.readFileSync(path, "utf8");
//       return this.splitLines(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   splitLines(data) {
//     return data.split("\n").map((line) => line.trim());
//   }
// }

// module.exports = new Utils();

//day 1
// class Utils {
//   constructor() {
//     this.fs = fs;
//   }

//   openFile(path) {
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
// }

// module.exports = new Utils();

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

module.exports = new Utils();
