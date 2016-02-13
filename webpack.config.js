const path = require("path");
const config = {
  entry: path.resolve(__dirname, "containers/index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, "components"),
        path.resolve(__dirname, "containers")
      ],
      loader: "babel-loader",
      query: {
        presets: ["react", "es2015"]
      }
    }]
  }
};

module.exports = config;
