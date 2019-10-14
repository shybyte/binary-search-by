const binarySearchByPackage = require('./dist/src/index');
const assert = require('assert');

// https://medium.com/@dtinth/making-unhandled-promise-rejections-crash-the-node-js-process-ffc27cfcc9dd
process.on('unhandledRejection', up => { throw up })

module.exports = {
  require: {
    'assert': assert,
    'binary-search-by': binarySearchByPackage,
  }
};
