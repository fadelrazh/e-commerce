const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
  );

  return config;
};
