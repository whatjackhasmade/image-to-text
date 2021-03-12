const path = require('path');
const webpack = require('webpack');

const buildPath = stringDirectory => path.resolve(__dirname + `/` + stringDirectory);

module.exports = {
  webpack: config => {
    config.resolve.alias['to-text'] = buildPath('src/components');
    config.resolve.alias['atoms'] = buildPath('src/components/atoms');
    config.resolve.alias['particles'] = buildPath('src/components/particles');

    // Support SVG loading https://stackoverflow.com/a/55180310
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
