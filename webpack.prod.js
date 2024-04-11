const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

process.env["NODE_ENV"] = "production"; // Set the NODE_ENV environment variable to "production"

module.exports = merge([
  common, // Merge with common webpack configuration
  {
    mode: "production", // Set mode to production for production environment
    optimization: {
      minimize: true, // Enable minification
      minimizer: [
        // Configure minimizers, in this case, CssMinimizerPlugin for CSS minification
        new CssMinimizerPlugin(), // Use CssMinimizerPlugin to minify CSS files
      ],
    },
  },
]);
