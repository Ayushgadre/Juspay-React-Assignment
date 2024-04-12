const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: "./src/index.js", // Entry point of your application
  },
  output: {
    path: path.resolve(__dirname, "public"), // Output directory for bundled files
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Apply loaders to CSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          "css-loader", // Translate CSS into CommonJS
          {
            loader: "postcss-loader", // PostCSS loader for additional processing
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env", // Use preset-env for cross-browser compatibility
                    {
                      // Options for postcss-preset-env if needed
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/, // Apply Babel to JS files
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Babel presets for JS and React
          },
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()], // Use MiniCssExtractPlugin to extract CSS
};
