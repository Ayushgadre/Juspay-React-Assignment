const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge([
  common, // Merge with common webpack configuration
  {
    mode: "development", // Set mode to development for development environment
    // devServer: {
    //   contentBase: path.join(__dirname, "public"),
    //   compress: true,
    //   port: 3000,
    //   historyApiFallback: true,
    // },

    devServer: {
      static: {
        directory: path.join(__dirname, "public"), // Specify the directory to serve static files from
      },
      compress: true, // Enable gzip compression for faster file serving
      port: 3000, // Set the development server port
    },
  },
]);
