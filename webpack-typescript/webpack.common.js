const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './src/typescript/index.ts'],
  resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
};
