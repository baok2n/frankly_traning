// This file isn't transpiled, so we must use commonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack feature that Mocha doesn't understand.
require.extensions['.css'] = function() {};

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var jsdom = require('jsdom').jsdom

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.navigator = { userAgent: 'node.js' }
global.window = document.defaultView

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

documentRef = document
