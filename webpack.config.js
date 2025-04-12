// webpack.config.js
const path = require('path');

module.exports = function (webpackConfig, env) {
  const imageLoaderRule = {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        esModule: false, // <- この行が重要
      },
    },
  };

  webpackConfig.module.rules.push(imageLoaderRule);

  return webpackConfig;
};