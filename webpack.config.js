const path = require('path');

module.exports = {
  entry: './assets/js/injections/cookie-code-windmill-injection.js',
  output: {
    path: path.resolve(__dirname, 'assets/js/bundles'),
    filename: 'cookie-code-windmill-bundle.js',
  },
};