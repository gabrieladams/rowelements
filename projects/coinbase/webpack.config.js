const path = require("path");

module.exports = {
  mode: "development",
  entry: "./assets/js/src/alpine.js",
  output: {
    path: path.resolve(__dirname, "assets/js/build"),
    filename: "alpine.js",
  },
};
