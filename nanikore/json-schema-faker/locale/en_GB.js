module.exports = require('../lib/')
  .extend('faker', function() {
    try {
      return require('faker/locale/en_GB');
    } catch (e) {
      return null;
    }
  });
