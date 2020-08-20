'use strict'

// all routes places in here
const info = require('./login');

module.exports = function(app) {
    // pass the instance of routes
    info(app);
}
