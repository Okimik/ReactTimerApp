var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
  //  plugins: ['karma-chrome-launcher', 'karma-mocha', 'karma-mocha-reporter', 'karma-sourcemap-loader', 'webpack', 'mocha'],
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }

  });
};
