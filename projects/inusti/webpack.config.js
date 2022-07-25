const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/js/alpine.js",
  output: {
    path: path.resolve(__dirname, "dist/assets/js"),
    filename: "alpine.js",
  },
};
