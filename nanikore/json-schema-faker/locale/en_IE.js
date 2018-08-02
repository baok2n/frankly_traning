module.exports = require('../lib/')
  .extend('faker', function() {
    try {
      return require('faker/locale/en_IE');
    } catch (e) {
      return null;
    }
  });
