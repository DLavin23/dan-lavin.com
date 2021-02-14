const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './_source/_assets/js/main.js',
  output: {
    path: path.resolve(__dirname, '_site/assets/'),
    filename: 'main.js'
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["transform-class-properties"],
            },
          },
        ],
      },
      {
        test: /\.((s[ac]ss)|(css))$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          // { loader: "sass-loader" },
        ],
      },
    ]
  }
};
